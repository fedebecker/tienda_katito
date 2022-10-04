import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = ()=>{
    const {id} = useParams();
    console.log(id)
    return (
        <Container>
            <h1>Detalle del Producto</h1>
        </Container>
    )
}

export default ItemListContainer;