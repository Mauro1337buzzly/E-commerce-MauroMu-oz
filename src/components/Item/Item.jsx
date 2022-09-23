import React from "react";
import StyleItem from './Item.css'
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

  return (
    <>
    <div className="Card">
    <h1 className="Titulo">{producto.nombre}</h1>
    <h3 className="Precio">{producto.precio+"$"}</h3>
    <p className="Detalle">{producto.detail}</p>
    <img className="Imagen" src={producto.img} alt="torta" width={400}/>
    <Link to={`/Item/${producto.id}`}><button className="dtl" >Detalle</button></Link>
    </div>
   
    </>
  );
};

export default Item;
