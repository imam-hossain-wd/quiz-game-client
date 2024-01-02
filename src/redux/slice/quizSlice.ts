// store/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';


interface IInitialStateProps {
  current:number,
  ans:string,
  correct:number,
  showResultPage:boolean
}


const initialState:IInitialStateProps = {
  current: 0,
  ans: '',
  correct: 0,
  showResultPage: false,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
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
  },
});

export const { setCurrent, setAns, setCorrect, setShowResultPage} = quizSlice.actions;

export default quizSlice.reducer;
