import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Katito'} />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a Katito'} />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
