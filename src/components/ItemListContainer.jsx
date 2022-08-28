import React from 'react';
import Contador from './Contador';

const ItemListContainer = () => {
    function onAdd(cont){
        console.log('You have ${cont} products')
    }

    return (
        <>
            <Contador stock={9} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;
