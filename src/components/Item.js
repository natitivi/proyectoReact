import {React, useState, useEffect} from 'react';

const productos = [
    {id: 1, name: "Star", color: "verde", precio: 12, stock:6}, 
    {id: 2, name: "Iberic", color: "blue", precio: 5, stock:3},
    {id: 3, name: "Felicidad", color: "yellow", precio: 32, stock:9},
    {id: 4, name: "Rainbow", color: "multicolor", precio: 19, stock:7},
    {id: 5, name: "Moon", color: "white", precio: 22, stock:10}
]

function consultarPromesa(confirmacion) {

    return new Promise ((res,rej) => {
            if(confirmacion) {
                res(productos)
            } else {
                rej("Acceso denegado")
            }
    })

}

const Productos = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
        const productosJSX = data.map((producto, indice) => 
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                <div className="card-header">{producto.name}</div>
                    <div className="card-body">
                        <p className="card-text">Color: {producto.color}</p>
                        <p className="card-text">Price: US${producto.price}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                </div>
            </div>
            )

            console.log(productosJSX)

            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);


    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Item;
