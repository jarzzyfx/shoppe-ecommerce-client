// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './page-components/Homepage/Homepage'
import Shop from './page-components/Shop/Shop'
import Product from './page-components/Product/Product'
import OurStory from './page-components/OurStory/OurStory'
import ErrorHandler from './page-components/ErrorHandler/ErrorHandler'
import Navbar from './ui-components/Navbar/Navbar'
import Footer from './ui-components/Footer/Footer'
import ContactUs from './page-components/ContactUs/ContactUs'
import Auth from './page-components/Auth/Auth'
import Blog from './page-components/Blog/Blog'
import PrivacyPolicy from './page-components/PrivacyPolicy/PrivacyPolicy'
import RetrievePassword from './page-components/RetrievePassword/RetrievePassword'
import Login from './page-components/Auth/Login/Login'
import Register from './page-components/Auth/Register/Register'
import Help from './page-components/Help/Help'

function App() {


  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/help' element={<Help/>} />
          <Route path='/shop/:productId' element={<Product/>} />
          <Route path='/about-us' element={<OurStory/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/auth' element={<Auth/>}>
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
          </Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/retrieve-password' element={<RetrievePassword/>} />
          <Route path='*' element={<ErrorHandler/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
