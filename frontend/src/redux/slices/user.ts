import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: User | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: any) {
      return state
    },
    resetQuery() {
      return initialState;
    },
  },
});

export default userSlice.reducer;

export const { resetQuery, setUser } = userSlice.actions;

export const selectQuery = (state: RootState) => state.user;
