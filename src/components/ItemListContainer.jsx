import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const listadoProducto = [
  {
      id: 1,
      title: "Producto 1",
      description: "Descripcion del producto 1",
      price: "100",
      pictureUrl: "./img/caja-de-carton.png"
  },
  {
      id: 2,
      title: "Producto 2",
      description: "Descripcion del producto 2",
      price: "100",
      pictureUrl: "./img/caja-de-carton.png"
  },  
  {
      id: 3,
      title: "Producto 3",
      description: "Descripcion del producto 3",
      price: "100",
      pictureUrl: "./img/caja-de-carton.png"
  }, 
  {
      id: 4,
      title: "Producto 4",
      description: "Descripcion del producto 4",
      price: "100",
      pictureUrl: "./img/caja-de-carton.png"
  }, 
  {
      id: 5,
      title: "Producto 5",
      description: "Descripcion del producto 5",
      price: "100",
      pictureUrl: "./img/caja-de-carton.png"
  }, 
];



export const ItemListContainer = ({ greeting }) => {

  // const onAdd = (contador) => {
  //   alert("Se añadio un item con : " + contador);
  // }
  const [productos, setProductos] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listadoProducto);
    }, 2000);
  });

  useEffect(() => {
    promesa.then(() => {
      setProductos(listadoProducto);
      console.log('los productos fueron cargados');
    })
      .catch(() => {
        console.log('error al cargar los productos');
      })
      .finally(() => {
        console.log('Comencemos!');
      });
  } );
  
  return(
    <>
      {/*<div className="container">{greeting}</div>
       <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount> */}
      {(productos.length > 0) ? <ItemList productos={productos}></ItemList> : <div>Cargando...</div>
      }
    </>
  ) 
}
