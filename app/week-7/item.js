export default function Item({itemObj}) {
    return(
        <div className="bg-slate-900 max-w-sm mx-5 my-7">
            <ul>
                <li><b>{itemObj.name}</b></li>
                <li>Quantity: {itemObj.quantity} in {itemObj.category}</li>
            </ul>
        </div>
    );
}