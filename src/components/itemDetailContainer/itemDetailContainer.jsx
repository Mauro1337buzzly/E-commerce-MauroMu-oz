import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import productos from '../productos';

 const ItemDetailContainer = () => {

  const [data, setData ] = useState({});

  const {id} = useParams()

  const customFetch = (items) => {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{

          if(id){
            resolve (productos.find((item)=> item.id == id))
          } else resolve(productos)
        }, 2000)
    })
     }


  useEffect(() => {
  const getData = new Promise ( resolve => {
    setTimeout(() => {
      if(id){
        resolve (productos.find((item)=> item.id == id))
      } else resolve(productos)
    }, 2000)
  });

  getData.then(res => setData(res));
}, [id])

  return (
    <ItemDetail data={data}/>


  )
}
 ;
export default ItemDetailContainer;