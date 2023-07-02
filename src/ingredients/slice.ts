import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientIcons } from "../utils/ingredient-icons";

export const TIMER_START: number = 10;

export interface Ingredients {
    currentIngredients: Array<string>;
    timer: number;
}
const initialState: Ingredients = {
    currentIngredients: ingredientIcons
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 5),
    timer: TIMER_START,
};

export const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        newIngredient: (state, action) => {
            state.currentIngredients.pop();
            state.currentIngredients.unshift(action.payload);
            return state;
        },
    },
});

export const { newIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
