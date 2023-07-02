import { useSelector } from "react-redux";
import PotionBtn from "./PotionBtn";

export default function CurrentIngredients() {
    const disableMix: boolean = useSelector(
        (state: any) => state.potion.length <= 0
    );
    const potion: Array<string> = useSelector((state: any) => state.potion);
    return (
        <>
            <h3>Potion</h3>
            <button disabled={disableMix}>Mix it!</button>
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
