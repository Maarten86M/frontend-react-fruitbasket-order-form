import './FruitType.css';

function FruitType({counter, setCounter, fruitname}) {

    function changeCounter(number) {
        setCounter(counter + number);
    }

    return (
        <>
            {counter >= 1 ?
                <div className="OrderContainerTwo">
                    <h2>{fruitname}</h2>
                    <button onClick={() => changeCounter(1)}>+</button>
                    <h3>{counter} </h3>
                    <button onClick={() => changeCounter(-1)}>-</button>
                </div>
                :
                <div className="OrderContainer">
                    <h2>{fruitname}</h2>
                    <button onClick={() => changeCounter(1)}>+</button>
                    <h3>{counter} </h3>
                    <button onClick={() => changeCounter(-1)}>-</button>
                </div>}

        </>
    )
};

export default FruitType;