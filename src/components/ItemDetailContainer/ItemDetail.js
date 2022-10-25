import { useContext, useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap"
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import CartContext from "../../context/cartContext";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);


    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.pictureURL} />
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$ {product.price}</ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                </ListGroup>
                        {
                            showItemCount
                                ? (<ItemCount initial={0} stock={product.stock} onAdd={handleAdd}></ItemCount>)
                                : (<Link to='/cart'>
                                    <Button variant="success">Ver carrito</Button>
                                </Link>)
                        }
            </Card>
        </>
    )
}

export default ItemDetail