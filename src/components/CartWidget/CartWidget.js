import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CartWidget = ()=>{
    return(
        <Link as={Link} to='/cart'>
            <AiOutlineShoppingCart/>
            <span className='item_total'>0</span>
        </Link>
    );
}

export default CartWidget;
