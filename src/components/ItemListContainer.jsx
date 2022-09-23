import React, {useState, useEffect} from "react";
import productos from "./productos"
import ItemList from "./ItemList";
import itemDetailContainer from "./itemDetailContainer/itemDetailContainer";
import Counter from "./Counter/Counter";
import { useParams } from "react-router-dom";





const ItemListContainer = () => {

  const {cat}=useParams()

  const [listaProductos, setListaProductos] = useState ([])

  console.log(cat)

  const customFetch = (items) => {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{

            if(cat) {
                resolve (productos.filter((item)=> item.cat == cat))
            } else resolve(productos)

            resolve(items)
        }, 2000)

        
    } )


}


  useEffect(() => {
   customFetch(productos)
   .then(data => setListaProductos(data))
  },[cat])

  const OnAdd = (prod) => {
    alert("Seleccionaste"+(prod)+"Item")
  }

    return (
      <div><ItemList listaProductos={listaProductos}/>
      </div>
    )
  }

export default ItemListContainer;