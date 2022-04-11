import React from "react";

const Item = ({producto}) => {

    return (
        <>
            <div className={producto.id}>
                <img src={producto.pictureUrl} alt="Imagen Producto" />
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
                <p>Q{producto.price}</p>
            </div>
        </>
    )
}

export default Item;