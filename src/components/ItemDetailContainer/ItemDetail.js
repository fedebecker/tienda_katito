import { Card, ListGroup } from "react-bootstrap"
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Img variant="top" src={product.pictureURL} />
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>$ {product.price}</ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
                <ListGroup.Item>
                    <ItemCount></ItemCount>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default ItemDetail