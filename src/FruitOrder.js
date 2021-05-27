import FruitType from "./FruitType";
import CustomButton from "./Costumbutton";
import {useState} from "react";

function FruitOrder() {
    const [counterStrawberry, setCounterStrawberry] = useState(0);
    const [counterBanana, setCounterBanana] = useState(0);
    const [counterApple, setCounterApple] = useState(0);
    const [counterKiwi, setCounterKiwi] = useState(0);

    function resetButton() {
        setCounterApple(0);
        setCounterKiwi(0);
        setCounterBanana(0);
        setCounterStrawberry(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitType
                fruitname="🍓 Aarbeien"
                counter={counterStrawberry}
                setCounter={setCounterStrawberry}
            />
            <FruitType
                fruitname={"🍌 Bananen"}
                counter={counterBanana}
                setCounter={setCounterBanana}
            />
            <FruitType
                fruitname={"🍏 Appels"}
                counter={counterApple}
                setCounter={setCounterApple}
            />
            <FruitType
                fruitname={"🥝 Kiwi's "}
                counter={counterKiwi}
                setCounter={setCounterKiwi}
            />

            <CustomButton
                buttonname="Reset"
                onclick={() => resetButton()}
                buttontype="button"
            />
        </>
    )
}

export default FruitOrder;