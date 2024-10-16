"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";

export default function Page() {

    const[item, setItem] = useState(itemsData);

    const handleAddItem = (items) => {
        setItem([...item, items]);
    }

    return(
        <main>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={item}/>
        </main>
    );

}