import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AppState {
  count: number;
  todo: { text: string }[];
}

// Define the initial state using that type
const initialState: AppState = {
  count: 0,
  todo: [{ text: "Buy milk" }, { text: "Buy strawberries" }],
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo.push({ text: action.payload });
    },
  },
});

export const { increment, decrement, addTodo } = appSlice.actions;

export default appSlice.reducer;
