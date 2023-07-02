import { useDispatch, useSelector } from "react-redux";
import { addIngredient, removeIngredient } from "../potion/slice";

interface Prop {
    ingredient: string;
    add: boolean;
}

const PotionBtn = ({ ingredient, add }: Prop) => {
    const dispatch = useDispatch();
    const disableMix: boolean = useSelector(
        (state: any) => state.potion.includes(ingredient) == add
    );

    return (
        <button
            disabled={disableMix}
            onClick={() => {
                if (add) {
                    dispatch(addIngredient(ingredient));
                } else {
                    dispatch(removeIngredient(ingredient));
                }
            }}
        >
            {ingredient}
        </button>
    );
};

export default PotionBtn;
