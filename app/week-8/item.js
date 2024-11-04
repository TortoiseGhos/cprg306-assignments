"use client"

export default function Item({itemObj, onSelect}) {
    return(
        <div className="bg-slate-900 max-w-sm mx-5 my-7">
            <ul>
                <li onClick={() => onSelect(itemObj.name)}><b>{itemObj.name}</b></li>
                <li>Quantity: {itemObj.quantity} in {itemObj.category}</li>
            </ul>
        </div>
    );
}