import { Product } from './components/Product/Product'
import { ProductDetail } from './components/ProductDetail/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
