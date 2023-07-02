import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
    key: string;
    ingredients: string[];
    name: string;
    count: number;
}
const initialState: { [key: string]: Recipe } = {};

export const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            if (!state.hasOwnProperty(action.payload.key)) {
                state[action.payload.key] = action.payload;
            }
            state[action.payload.key].count += 1;
        },
    },
});

export const { addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
