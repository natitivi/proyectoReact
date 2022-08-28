import React from 'react';
import {useState} from 'react';

const Contador = ({stock, onAdd}) => {
    const [cont, setCont] = useState(0);
    function substract(){
        if(cont > 1){
            setCont(cont - 1)
        }
    }
    function add(){
        if(cont < stock){
            setCont(cont + 1)
        }
    }
    function reset(){
        setCont(0)
    }
    return (
        <div>
            <div className='contador'>
                <h2>Hurry! Low stock</h2>
                <p>Stock: {9} </p>
                <p>Cantidad: {cont} </p>

                        
                <div>
                <button className='boton' onClick={substract}> - </button>
                <button className='boton1' onClick={reset}> Delete </button>
                <button className='boton' onClick={add}> + </button>
                </div>
            </div>

            <div className='contador'>
                <button className='boton2' onClick={() => onAdd(cont)}> Checkout </button>
                </div>
            </div>
    );
}

export default Contador;
