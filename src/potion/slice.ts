import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<string> = [];

export const potionsSlice = createSlice({
    name: "potion",
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
        removeIngredient: (state, action: PayloadAction<string>) => {
            const index = state.indexOf(action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addIngredient, removeIngredient } = potionsSlice.actions;
export default potionsSlice.reducer;
