import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  answers: {
    type: [Number], // Array of numbers
    required: true
  },
  totalScore: {
    type: Number,
    required: true
  },
  categoryScores: {
    type: Object, // Use plain object instead of Map
    required: true
  },
  questionBreakdown: {
    type: [{
      question: String,
      category: String,
      score: Number
    }], // Array of objects
    required: true
  }
});

const QuizModel = mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);

export default QuizModel;
