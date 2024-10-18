import { TiDeleteOutline } from "react-icons/ti";

const Itemlist = ({ items, handleDeleteItem }) => {
    return (
        <div className="divhader">
            <ul>
                {items.map((item, index) => (
                    <div className="itemDiv">
                        <h3 key={index}>{item.itemName} </h3>
                        <h3 key={index}>{item.itemDate} </h3>
                        <button onClick={() => handleDeleteItem(item.itemName)}><TiDeleteOutline className="icon" /></button>
                    </div>
                ))}
            </ul>
        </div>


    );
};

export default Itemlist;

//     <h4 key={index}> {item.itemName} - {item.itemDate}
///</h4>
//<button  onClick={() => handleDeleteItem(item.itemName)}><TiDeleteOutline className="icon" /></button> //