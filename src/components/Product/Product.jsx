import { ProductCard } from '../ProductCard/ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Product = () => {
    const [ products, setProducts] = useState([])

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((result) =>{
        setProducts(result.data)
      })
    }, [])
  
    return (
      <div className='App'>
        <h1>Lista de productos</h1>
        {products && products.map((product) => {
            return(
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title} 
                image={product.image} 
                price={product.price}
              />
            )
        })}
      </div>
    )
}

