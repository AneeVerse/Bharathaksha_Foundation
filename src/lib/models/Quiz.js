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
  title: {
    type: String, 
    required: true
  },
  type: {
    type: String
  },
  finalType: {
    type: String
  },
  answers: {
    type: [Number], // Array of numbers for responses
  },
  totalScore: {
    type: Number,
  },
  totalScores: {
    type: Array, // Array of objects, e.g., [{I: 20}, {E: 10}]
  },
  categoryScores: {
    type: Object, // Plain object for category scores, e.g., { I: 15, E: 10 }
  },
  questionBreakdown: {
    type: [{
      question: String,
      category: String,
      score: Number
    }], // Array of objects for detailed question breakdown
  },
  varkCounts: {
    type: Object // For VARK counts (V: 5, A: 3, etc.)
  },
  coordinates: {
    type: Object // For social style coordinates, e.g., { x: 2, y: -1 }
  },
  scores: {
    type: Object // For RIASEC scores (e.g., R: 10, I: 8, A: 5)
  },
  counts: {
    type: Object // For RSI type counts (A: 5, B: 3, etc.)
  }
}, { timestamps: true });

const QuizModel = mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);

export default QuizModel;
