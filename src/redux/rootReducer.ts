import { baseApi } from "./api/baseApi";
import authSlice from "./slice/authSlice";
import quizSlice from "./slice/quizSlice";
import timecounterSlice from "./slice/timecounterSlice";


export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    auth:authSlice,
    quiz:quizSlice,
    timeCounter : timecounterSlice,
}





