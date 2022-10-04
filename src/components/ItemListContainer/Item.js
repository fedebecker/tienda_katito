import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';

const Item =({product})=>{
    return(
        <Card className="product_card">
            <Card.Img variant="top" src={product.pictureURL} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    $ {product.price}
                </Card.Text>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button as={Link} to={`/item/${product.id}`}variant="secondary">
                    Ver producto
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item;