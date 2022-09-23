import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

const Cart = () => {

  const contxt =  useContext(CartContext);

  return (
    <>
    <h1>soy un carrito </h1>
    <button onClick={contxt.clear}>Borrar Todo</button>
    { 
        contxt.cartList.map(item => <li>{item.nombre} ${item.precio} <button onClick={() => contxt.removeItem(item.id)}>Delete Product</button> </li>)
    }
    </>
  )
}

export default Cart