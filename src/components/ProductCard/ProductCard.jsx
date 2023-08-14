import { Link } from 'react-router-dom'
import './ProductCard.css'

export const ProductCard = ({ id, title, price, image, description }) => {
  return (
    <div>
      <h2 className='productInfo'>
        <Link to={`/product/${id}`}>
          {title}
        </Link>
      </h2>
        <img className='productImage' src={image} alt="Imagen de Producto" />
        {description&&<p>{description}</p>}
        <p>Price:{price}</p>
    </div>
  )
}
