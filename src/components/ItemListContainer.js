import './ItemListContainer.css';

const ItemListContainer = ({greeting})=>{
    return(
        <>
            <h1 className='productos'>¡Descubrí estos productos imperdibles!</h1>
            <h3 className='greeting'>{greeting}</h3>
        </>
    );
}

export default ItemListContainer;
