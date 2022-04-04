import React from "react";
import './ItemListContainer.css';
import ItemCount from "./ItemCount";

export const ContenedorMain = ({ greeting }) => {

  const onAdd = ({contador}) => {
    alert("Se añadio un item con : " + contador);
  }

  return(
    <>
      <div className="container">{greeting}</div>
      <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
    </>
  ) 
}
