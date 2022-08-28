import React from 'react';
import {useState} from 'react';

const ItemCount = () => {

    const [cont, setCont] = useState(0);

    function contador(operacion) {
        if(operacion == "+") {
            setCont(cont + 1)
        } else {
            setCont(cont - 1)
        }
    }

    return (
        <>
            <button style={{ color: 'white'}} className='btn btn-dark' onClick={() => setCont(cont - 1)}>
            -
            </button>
            <p style={{ color: '#00dfff'}}>  {cont}</p>
            <button style={{ color: 'white'}} className='btn btn-dark' onClick={() => setCont(cont + 1)}>
            +
            </button>
        </>
    );
}

export default ItemCount;
