import React from 'react'
import Add_product from './Add_product'
import Logout from './Logout'
import Product from './Product'
import Profile from './Profile'
import Update_product from './Update_product'
import { Route,Routes } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/addproduct" element={<Add_product />} />
        <Route path="/updateproduct" element={<Update_product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default Home
