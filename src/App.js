import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './components/CartContext/CartContext.jsx';


function App() {
  return (
 <>
 <CartContextProvider>
<Router>
      <Navbar>
      </Navbar>
<Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route path="/:cat" element={<ItemListContainer/>}/>
      <Route path="/Item/:id" element ={<ItemDetailContainer/>}/>
      <Route path="/cart" element ={<Cart/>}/>
      
</Routes>
</Router>
</CartContextProvider>
      </>
  );
}

export default App;
