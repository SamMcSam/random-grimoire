import { Recipe } from "./slice";

interface Prop {
    recipe: Recipe;
}

const RecipeElement = ({ recipe }: Prop) => {
    return (
        <div>
            <span>{recipe.name}</span>
        </div>
    );
};

export default RecipeElement;
