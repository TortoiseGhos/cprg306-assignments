"use client"

import { useState } from "react";
import Item from "./item";


export default function ItemList({items, onItemSelect}) {

    const [sortBy, setSortBy] = useState("name");

    const sorting = [...items].sort((a,b) => {
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
                {sorting.map((item) => {
                    return (
                        <div className="bg-slate-900 max-w-sm mx-5 my-7">
                            <li key={item.id} onClick={() => onItemSelect(item)}>
                                <Item itemObj={item} onSelect={onItemSelect} />
                            </li>
                        </div>
                    );
                })}
            </ul>

      </main>

    );
}

