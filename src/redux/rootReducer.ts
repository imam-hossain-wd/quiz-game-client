import { baseApi } from "./api/baseApi";
import authSlice from "./slice/authSlice";

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    auth:authSlice,
}

