"use client"


import { useState } from "react";


export default function NewItem() {

    const [quantity, setQuantity] = useState(0);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");


    let incStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-4";
    let decStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-4";

    if(quantity == 20){
        incStyles = "bg-grey-500 mb-5 px-4";
    }

    if(quantity == 1){
        decStyles = "bg-grey-500 mb-5 px-4";
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name, quantity, category};
        console.log(item);
        alert("Added: " + name + ", quantity: " + quantity + ", Category: " + category);
        item = {name: setName(""), quantity: setQuantity(0), category: setCategory("Produce")};
            
    }

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const categoryChange = (event) => {
        setCategory(event.target.value);
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
                <h1>Week 5</h1>
            </div>

            <div className="justify-between">
                <form onSubmit={handleSubmit}>
                    <div className="pt-5" >
                            <input className="text-black" value={name} type="text" placeholder="Enter the Name" onChange={nameChange} required=""/>    
                    </div>
                    <div className="pt-5">
                        <label className="flex">Category </label>
                            <select className="text-black "value={category} onChange={categoryChange}>
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="justify-between">
                        <div className="pt-5">
                        <p>Quantity: {quantity}</p>
                        </div>

                            <div className="">
                                <button type="button" className={incStyles} onClick={increment}>+</button>
                                <button type="button" className={decStyles} onClick={decrement}>-</button>
                            </div>
                    </div>
                    
                    <button type="submit" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-10">Submit</button>
                </form>
            </div>
            </div>

        </main>
    );
}
