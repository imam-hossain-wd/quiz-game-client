// store/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    current: 0,
    ans: '',
    correct: 0,
    showResultPage: false,
    activeNextButton: false,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setAns: (state, action) => {
      state.ans = action.payload;
    },
    setCorrect: (state, action) => {
      state.correct = action.payload;
    },
    setShowResultPage: (state, action) => {
      state.showResultPage = action.payload;
    },
    setActiveNextButton: (state, action) => {
      state.showResultPage = action.payload;
    },
  },
});

export const { setCurrent, setAns, setCorrect, setShowResultPage, setActiveNextButton } = quizSlice.actions;

export default quizSlice.reducer;
