import { useState } from "react";

import { MdPostAdd } from "react-icons/md";
const Todoheader = ({ handleitemAdd }) => {

    const [itemName, newItemName] = useState("");
    const [itemDate, newItemdate] = useState("");

    const handelItem = () => {

        handleitemAdd(itemName, itemDate);

        newItemName("");
        newItemdate("");

        console.log(itemName, itemDate);
    };





    return (
        <>
            <div className="header">
                <input type="text" placeholder="Enter task ..." value={itemName} onChange={(e) => newItemName(e.target.value)} />
                <input type="date" value={itemDate} onChange={(e) => newItemdate(e.target.value)} />
                <button onClick={handelItem}><MdPostAdd className="deleteIcon" /></button>

            </div >

        </>
    )
}

export default Todoheader;