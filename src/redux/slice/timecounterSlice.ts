import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timeLeft: 30, // Time left for the current question
  totalTime: 0, // Total time taken for the quiz
};

const timeCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
    incrementTotalTime: (state) => {
      state.totalTime += 1;
    },
    resetQuizTime: (state) => {
      state.timeLeft = 3;
      state.totalTime = 0;
    },
  },
});

export const { setTimeLeft, incrementTotalTime, resetQuizTime } = timeCounterSlice.actions;

export default timeCounterSlice.reducer;
