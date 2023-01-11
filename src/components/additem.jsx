import React, { useState } from 'react';
import Item from './newitem';

function AddItem() {
    const [items, setItem] = useState([<Item key={0} />]);

    let handleAddItem = (e) => {
        e.preventDefault()
        setItem([...items, <Item key={items.length} />]);
        console.log("Increment clicked", this);
    }

    return (
        <div>
            <h1>Hello, Yerim</h1>
            <button onClick={handleAddItem} className="btn btn-primary">Add item</button>
        </div>
    )
}
 
export default AddItem;