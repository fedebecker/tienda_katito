const { createContext, useState } = require("react");

const CartContext = createContext([]);

export default CartContext;

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
            const item = {
                ...product,
                quantity
            };
            setCart([...cart, item]);
        } else {
            const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
            const itemDraft = { ...cart[itemIndex] };
            itemDraft.quantity = itemDraft.quantity + quantity;

            const cartDraft = [...cart];
            cartDraft[itemIndex] = itemDraft;
            setCart(cartDraft);
        }
    }

    const removeItem = (itemId) => {
        const cartDraft = cart.filter((item) => item.id !== itemId);
        setCart(cartDraft);
    }

    const clear = () => {
        setCart([]);
    }

    let total = 0;
    cart.forEach((item)=>{
        total += (item.price*item.quantity)
    });

    let totalItems = 0;
    cart.forEach((item)=>{
        totalItems += item.quantity
    });

    const isInCart = (id) => cart.some((item) => item.id === parseInt(id))



    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, total, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}; 