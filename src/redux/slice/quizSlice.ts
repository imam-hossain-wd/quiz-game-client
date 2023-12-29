// // quizSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// const initialState: any = {
//   quizData: [],
// };


// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {
//     setQuizData: (state, action: PayloadAction<any>) => {
//         state.quizData = action.payload;
//     },
//   },
// });


// export const { setQuizData } = quizSlice.actions;
// export default quizSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('quizData');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState: any = {
  quizData: loadState() || []
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizData: (state, action: PayloadAction<any>) => {
      state.quizData = action.payload;
      localStorage.setItem('quizData', JSON.stringify(action.payload));
    },
  },
});

export const { setQuizData } = quizSlice.actions;
export default quizSlice.reducer;
