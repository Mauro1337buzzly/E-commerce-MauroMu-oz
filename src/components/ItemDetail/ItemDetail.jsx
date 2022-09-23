import React, { useState } from 'react';
import productos from '../productos';
import StyleItem from '../Item/Item.css'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'




export const ItemDetail = ({data}) => {

  const [counter, setCounter] = useState(0);

  const contxt =  useContext(CartContext);

  const onAdd = (cantidad) => { 
    setCounter(cantidad)
    alert(cantidad)

    contxt.addItem(data, cantidad);
      
  }

  return (
   <>
   <div className='Card' >
    <div className='Titulo'>{data.nombre}</div>
    <div className='Precio'>{data.precio+"$"}</div>
    <div className='Detalle'>{data.detail}</div>
    <img className='Imagen' src={data.img}/>
    {

      counter != 0 ? <Link to="/cart"><button className='dtl' >Ir al carrito</button> </Link> : <Counter init={0} stock={10} onAdd={onAdd} ></Counter>
    }
    

    </div>
   </>
  )
}

export default ItemDetail;