import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../utils/products'


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    }, [categoryId])

    return (
        <Container>
            <h1 className='productos'>¡Descubrí estos productos imperdibles!</h1>
            <h3 className='greeting'>{greeting}</h3>
            <ItemList products={products} />
        </Container>
    );
}

export default ItemListContainer;
