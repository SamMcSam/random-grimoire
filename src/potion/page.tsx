import Header from "../utils/header";
import CurrentIngredients from "../ingredients/CurrentIngredients";
import ListPotions from "./ListPotion";

export default function Potions() {
    return (
        <>
            <Header
                pageName="Potions"
                btnHeader="📖 Recipes"
                btnLink="/recipes"
            ></Header>
            <CurrentIngredients></CurrentIngredients>
            <ListPotions></ListPotions>
        </>
    );
}
