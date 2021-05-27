import React from 'react';
import './App.css';
import DeliveryForm from "./DeliveryForm";
import FruitOrder from "./FruitOrder";

function App() {
    return (
        <div className="pageContainer">
            <FruitOrder />
            <DeliveryForm/>
        </div>
    );
}

export default App;
