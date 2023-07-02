import { useSelector } from "react-redux";
import PotionBtn from "../potion/PotionBtn";

export default function CurrentIngredients() {
    const ingredients: Array<string> = useSelector(
        (state: any) => state.ingredients.currentIngredients
    );
    return (
        <>
            <h3>Current Ingredients</h3>
            <div>
                {ingredients.map((ingredient, index) => (
                    <PotionBtn
                        key={index}
                        ingredient={ingredient}
                        add={true}
                    ></PotionBtn>
                ))}
            </div>
        </>
    );
}
