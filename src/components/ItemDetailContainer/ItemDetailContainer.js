import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from '../../utils/products'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct(id)
            .then((data) => setProduct(data))
            .catch((error) => console.warn(error))
    }, [id])
    console.log(product)
    return (
        <Container>
            <h1>Detalle del Producto</h1>
            <ItemDetail product={product} />
        </Container>
    )
}

export default ItemDetailContainer;