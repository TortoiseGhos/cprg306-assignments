"use client"


import { useState } from "react";




export default function NewItem() {

    const [quantity, setQuantity] = useState(0);

    let incStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mt-5 px-4 py-2";
    let decStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mt-5 px-4 py-2";

    if(quantity == 20){
        incStyles = "bg-grey-500 mt-5 px-4 py-2";
    }

    if(quantity == 1){
        decStyles = "bg-grey-500 mt-5 px-4 py-2";
    }

    const increment = () => {
        let currentQuantity = quantity;
        if (quantity <= 19) {
            setQuantity(currentQuantity + 1); 
        }
    }
    const decrement = () => {
        let currentQuantity = quantity;
        if (quantity >= 2) {
            setQuantity(currentQuantity - 1); 
        }
    }

    return(
        <main className="flex justify-center">
            <div className=" justify-between">
            <div className="flex">
                <h1>Week 4</h1>
            </div>

            <div className="flex">
                <p>Current quantity: {quantity}</p>
            </div>

            <div className="flex">
                <button className={incStyles} onClick={increment}>Increment</button>
                <button className={decStyles} onClick={decrement}>Decrement</button>
            </div>
            </div>

        </main>
    );
}
