import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Async thunk to submit quiz data to the server
export const submitQuizResults = createAsyncThunk(
  'quiz/submitQuizResults',
  async (quizData, { getState }) => {
    let { title, answers, totalScore, categoryScores } = getState().quiz;
    let questionBreakdown = categoryScores.questionBreakdown;
    categoryScores = categoryScores.categoryScores;

    
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('token');

    // Check if token is available
    if (!token) {
      throw new Error('Token not found. User is not authenticated.');
    }

    console.log("title", title, "answers", answers, "total Score", totalScore, "categoryScores", categoryScores, "breakdonw", questionBreakdown);

    // Send the quiz data to the server with the token in the Authorization header
    const response = await fetch('/api/quiz/adversity', {
      method: 'POST',
      cache:"no-cache",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Send the token in the Authorization header
      },
      body: JSON.stringify({
        title,
        answers,
        totalScore,
        categoryScores,
        questionBreakdown
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit quiz results');
    }

    return response.json();
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    title: "",
    answers: [],
    totalScore: null,
    categoryScores: { categoryScores: {}, questionBreakdown: [] }, // Include both category scores and question breakdown
    status: 'idle',
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    setTotalScore: (state, action) => {
      state.totalScore = action.payload;
    },
    setCategoryScores: (state, action) => {
      state.categoryScores = action.payload; // Store category scores and breakdown in the state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuizResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitQuizResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(submitQuizResults.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {setTitle , setAnswers, setTotalScore, setCategoryScores } = quizSlice.actions;
export default quizSlice.reducer;
