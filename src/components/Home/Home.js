import React,{useState, useEffect}from 'react'
import './Home.css'
import {getAllProducts} from '../../ApiService/api'
import { Link } from 'react-router-dom'


function Home() {

const [products, setProducts] = useState([])

useEffect(() => {

const fetchProducts = async () => {
    const data = await getAllProducts();
setProducts(data)

}

fetchProducts()

}, [])


  return (
    <div className='product-grid'>

        {
            products.map((product)=> (
                <div className='product' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>
                    <span className='price'>${product.price}</span>
                </p>
                <Link to={`/product/${product.id}`}>
                <button>Product details</button>
                </Link>
              </div>
            ))
        }


    </div>
  )
}

export default Home
