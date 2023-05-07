import { useState, useEffect } from 'react'
import "../assets/css/Products.css"

const Products = () => {
    const [products, setProducts] = useState([]);

    const obtenerDatos = async ()=>{
        const data = await  fetch('http://localhost:3010/api/products')
        const products = await data.json()
       
        setProducts(products.data);
      
    }
    useEffect(() => {
        obtenerDatos()
    }, [])

    return(
        <div className='contenedor'>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Productos</h5>
                </div>
                <div className="card-body">
                    <div>
                        <ul className="list-group list-group-flush">
                        {
                        products.length > 0 ?
                        products.map((product , i) =>{
                          return  <li className="list-group-item" key = {product + i}>
                               id: {product.id} - {product.name}
                            </li>
                        })
                        :"Cargando..."

                    }
                        </ul>
                    
                    </div>
                    <p></p>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Products;

        // { {
        //                             products.map((product, index) => {
                                        
        //                                 return <ProductChart {...product} key={index} />
        //                             })
        //                         } }