import React, {useState} from "react";
import './ItemCount.css';
const ItemCount = ({stock, initial, onAdd}) => {


    const [contador, setContador] = useState(initial);
    
    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }
    const restarContador = () => {
        if (contador > initial){
            setContador(contador - 1);
        }
    }

    const validarOnAdd = () => {
        if(stock <= 0){
            alert("No hay stock disponible");
        }
        else if(stock > initial){
            onAdd({contador});
        }
    }

    return (
        <>  
            <div className="agregarItem">
                <div className="controles">
                    <button onClick={sumarContador}>+</button>
                    <h2>{contador}</h2>
                    <button onClick={restarContador}>-</button>
                </div>
                <button className="añadir" onClick={validarOnAdd}>Añadir</button>
            </div>
            
        </>
    )
} 

export default ItemCount;