"use client"

import itemObj from "./item";
import Item from "./item";
import Items from "./items.json";
import { useState } from "react";



export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    Items.sort((a,b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name)
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    let buttonNameStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-4";
    let buttonCategoryStyles = "bg-blue-600 hover:bg-blue-950 active:bg-yellow-200 rounded text-white mb-5 px-4";
    if(sortBy == "name"){
        buttonNameStyles = "bg-grey-500 mb-5 px-4";
    }
    if(sortBy == "category"){
        buttonCategoryStyles = "bg-grey-500 mb-5 px-4";
    }

    const setName = () => {
        setSortBy("name");
    }

    const setCategory = () => {
        setSortBy("category");
    }

    return(

      <main>
        <button className={buttonNameStyles} onClick={setName}>Name</button>
        <button className={buttonCategoryStyles}onClick={setCategory}>Category</button>
        <ul>
                {Items.map((item) => {
                    return (
                        <div className="bg-slate-900 max-w-sm mx-5 my-7">
                            <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.quantity}</p>
                            <p>{item.category}</p>
                            </li>
                        </div>
                    );
                })}
            </ul>

      </main>

    );
}

