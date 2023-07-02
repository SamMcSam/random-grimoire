import { useDispatch, useSelector } from "react-redux";
import { addRecipe, Recipe } from "../recipes/slice";
import { resetPotion } from "../potion/slice";
import PotionBtn from "./PotionBtn";

export default function CurrentIngredients() {
    const disableMix: boolean = useSelector(
        (state: any) => state.potion.length <= 0
    );
    const potion: Array<string> = useSelector((state: any) => state.potion);
    const dispatch = useDispatch();

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const recipe: Recipe = {
            key: potion.toString(),
            ingredients: potion,
            name: "Random name",
            count: 0,
        };
        dispatch(addRecipe(recipe));
        dispatch(resetPotion());
    };

    return (
        <>
            <h3>Potion</h3>
            <button disabled={disableMix} onClick={handleClick}>
                Mix it!
            </button>
            <div>
                {potion.map((ingredient, index) => (
                    <PotionBtn
                        key={index}
                        ingredient={ingredient}
                        add={false}
                    ></PotionBtn>
                ))}
            </div>
        </>
    );
}
