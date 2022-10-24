import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext';

const CartWidget = ()=>{
    const { totalItems } = useContext(CartContext)

    return(
        <Link as={Link} to='/cart'>
            <AiOutlineShoppingCart/>
            {totalItems>0 && <Badge pill bg="danger">{totalItems}</Badge>}
        </Link>
    );
}

export default CartWidget;
