import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;
*/

export const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState: 0,
    reducers: {
        addIngredient: (state, action: PayloadAction<number>) =>
            state + action.payload,
    },
});

export const { addIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
