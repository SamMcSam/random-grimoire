import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "../ingredients/slice";
import potionReducer from "../potion/slice";
import recipesReducer from "../recipes/slice";

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        potion: potionReducer,
        recipes: recipesReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
