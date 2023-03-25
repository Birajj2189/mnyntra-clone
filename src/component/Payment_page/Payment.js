import React from 'react'
import Footer2 from '../checkout/Footer2'
import Navbar4 from './Navbar4'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = () => {
  return (
     <div>
          <Navbar4/>
          <div className='w-full h-auto'>
            <Elements stripe={ stripePromise }>
            { ({elements,stripe})=>(
                <form action="">  
                  {/* <CardElement/> */}
                </form>
              )
            }
            </Elements>
          </div>
          <Footer2/>
     </div>
  )
}

export default Payment