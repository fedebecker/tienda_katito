import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css';


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleSubstract = () => {
        setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleClick = () => onAdd(count)

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])


    return (
        <div className="item_count">
            <div className="item_counter">
                <Button variant="danger" disabled={count <= 0} onClick={handleSubstract}>-</Button>
                <h5>{count}</h5>
                <Button variant="success" disabled={count >= stock} onClick={handleAdd}>+</Button>
            </div>
            <div>
                <Button variant="primary" disabled={count <= 0} onClick={handleClick}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;