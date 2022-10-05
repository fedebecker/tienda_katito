import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const handleClick = (value) => {
        if(value>=0){
            setCount(value);
        }
    }


    return (
        <>
            <p>Cantidad {count}</p>
            <button onClick={()=>handleClick(count-1)}>-</button>
            <button onClick={()=>handleClick(count+1)}>+</button>
        </>
    )
}

export default ItemCount;