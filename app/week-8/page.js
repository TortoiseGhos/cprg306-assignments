"use client";

import { GetItems, AddItem } from "../week-10/_services/shopping-list-service"; // Import the service functions
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";

export default function Page({ user }) {
    const [items, setItems] = useState([]); 
    const [selectedItemName, setSelectedItemName] = useState(''); 

    const loadItems = async () => {
        if (user?.uid) {
            const userItems = await GetItems(user.uid);
            setItems(userItems);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user?.uid]);
    

    const handleItemSelect = (name) => {
        if (typeof name !== 'string') {
            console.error('Expected a string but got:', name);
            return;
        }
        const cleanedName = name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedName); 
    };

    const handleAddItem = async (newItem) => {
        if (user?.uid) {
            const docId = await AddItem(user.uid, newItem);
            const newItemWithId = { id: docId, ...newItem };
            setItems((prevItems) => [...prevItems, newItemWithId]);
        }
    };

    return (
        <main className="flex">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} /> 
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Items:</h2>
                    <ul>
                        {items.length === 0 ? (
                            <li>No items found.</li>
                        ) : (
                            items.map(item => (
                                <li
                                    key={item.id}
                                    onClick={() => handleItemSelect(item.name)}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    {item.name}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>            
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </main>
    );
}
