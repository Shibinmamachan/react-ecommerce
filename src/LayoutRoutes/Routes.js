import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Logout from '../components/Logout/Logout'
import ProductDetails from '../components/ProductDetails/ProductDetails'

function RoutesLayout() {
  return (
    <> 
    <Router>
        <Header/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path= '/logout' element={<Logout/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>



    </Routes>
        <Footer/>
    </Router>
    
    
    </>
  )
}

export default RoutesLayout
