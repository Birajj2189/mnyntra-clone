import React from 'react'
import Navbar2 from './checkout/Navbar2'
import Content from './checkout/Content'
import Footer2 from './checkout/Footer2'

const Checkout = ({cartItems,handleEmptyCart}) => {
  return (
    <div>
          <Navbar2/>
          <Content cartItems={cartItems} handleEmptyCart={handleEmptyCart}/>
          <Footer2/>
    </div>
  )
}

export default Checkout