import React from 'react';
import './App.css';
import NavBar from './componenet/NavBar';
import Slider from './componenet/Slider';
import ProductsList from './componenet/ProductsList';
import { Routes, Route } from "react-router-dom";
import About from './componenet/About';
import ProductDetails from './componenet/ProductDetails';



function App() 
{
    return(
        <div className='App'>
            <NavBar/>
            <Routes>
                <Route path='/' element = {
                    <>
                    <Slider/>
                     <ProductsList/>
                     </>
                    }
                    />
                <Route path='about' element = {<About/>}/>
                <Route path='product/:productId' element = {<ProductDetails/>}/>
            </Routes>
        </div>
    );
  
}

export default App;
