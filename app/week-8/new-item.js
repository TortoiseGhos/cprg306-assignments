"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    // Styles for increment and decrement buttons
    let incStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-4";
    let decStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-4";

    // Disable increment button if quantity is 20, and decrement if quantity is 1
    if (quantity === 20) {
        incStyles = "bg-gray-500 mb-5 px-4 cursor-not-allowed";
    }

    if (quantity === 1) {
        decStyles = "bg-gray-500 mb-5 px-4 cursor-not-allowed";
    }

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Ensure name is not empty before submitting
        if (name.trim() === "") {
            alert("Please enter an item name.");
            return;
        }
        const newId = Math.random().toString(36).substr(2, 9); 
        const item = { id: newId, name, quantity, category };
        await onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    // Increment quantity
    const increment = () => {
        if (quantity < 20) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    // Decrement quantity
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <main className="flex justify-left">
            <div className="justify-center">
                <div className="flex">
                    <h1>Shopping List</h1>
                </div>

                <div className="justify-between">
                    <form onSubmit={handleSubmit}>
                        <div className="pt-5">
                            <input
                                className="text-black p-2"
                                value={name}
                                type="text"
                                placeholder="Enter the Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="pt-5">
                            <label className="flex">Category </label>
                            <select
                                className="text-black p-2"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
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
                        <div className="justify-between pt-5">
                            <p>Quantity: {quantity}</p>
                            <div>
                                <button
                                    type="button"
                                    className={incStyles}
                                    onClick={increment}
                                    disabled={quantity === 20} // Disable if quantity is 20
                                >
                                    +
                                </button>
                                <button
                                    type="button"
                                    className={decStyles}
                                    onClick={decrement}
                                    disabled={quantity === 1} // Disable if quantity is 1
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-10"
                        >
                        Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
