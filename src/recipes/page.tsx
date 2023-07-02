import { useSelector } from "react-redux";
import Header from "../utils/header";
import RecipeElement from "./recipeElement";
import { Recipe } from "./slice";

export default function Recipes() {
    const recipes: { [key: string]: Recipe } = useSelector(
        (state: any) => state.recipes
    );
    return (
        <>
            <Header
                pageName="Recipes"
                btnHeader="⚗️ Potions"
                btnLink="/potions"
            ></Header>
            <div>
                {Object.values(recipes).map((recipe, index) => (
                    <RecipeElement key={index} recipe={recipe}></RecipeElement>
                ))}
            </div>
        </>
    );
}
