"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {

    const[item, setItem] = useState(itemsData);
    const[selectedItemName, setSelectedItemName] = useState('');

    const handleItemSelect = (name) => {
        if (typeof name !== 'string') {
            console.error('Expected a string but got:', name);
            return;
        }
        const cleanedName = name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedName)
    }

    const handleAddItem = (items) => {
        setItem([...item, items]);
    }

    return(
        <main className="flex">
            

            <div className="w-1/2">
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} onItemSelect={handleItemSelect}/>
                <ItemList items={item} onItemSelect={handleItemSelect}/>
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );

}