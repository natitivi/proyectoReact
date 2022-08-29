import React from 'react';
import Contador from './Contador';
import Item from './Item';

const ItemListContainer = () => {
    function onAdd(cont){
        console.log('You have ${cont} products')
    }

    return (
        <>
            <Contador stock={9} onAdd={onAdd}/>
            <Item/>
        </>
    );
}

export default ItemListContainer;