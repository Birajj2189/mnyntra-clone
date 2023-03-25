import React from 'react'
import {Link } from "react-router-dom"; 

const Mycart = ({handleUpdateCartQty,handleRemoveItem,cartItems}) => {
  return (
          <div className="h-[100vh] rounded shadow-xl invisible fixed bottom-0 top-0 right-0 z-[1045] flex w-96 lg:w-[30vw] max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          data-te-offcanvas-init>
          <div className="h-[10vh] flex items-center justify-between p-4">
               <button
               type="button"
               className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
               data-te-offcanvas-dismiss>
               <span
                    className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         d="M6 18L18 6M6 6l12 12" />
                    </svg>
               </span>
               </button>
               <h1 className='text-3xl font-bold'>MY CART</h1>
          </div>
          <div className="offcanvas-body flex-grow overflow-y-auto ">
               <div class="w-full pointer-events">
               <div class="flex h-[65vh] flex-col overflow-y-scroll bg-white w-full">
               <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">

               <div class="mt-8">
                    <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                         {
                         cartItems.line_items.map((items)=>(
                         <li class="flex py-6">
                         <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                         <img src={`${items.image.url}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"/>
                         </div>

                         <div class="ml-4 flex flex-1 flex-col">
                         <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                   <a href="#">{items.name}</a>
                              </h3>
                              <p class="ml-4">{items.line_total.formatted_with_symbol}</p>
                              </div>
                         </div>
                         <div className='flex text-gray-500 text-sm'>
                              Price : {items.price.formatted_with_symbol}
                         </div>
                         <div class="flex flex-1 items-end justify-between text-sm">
                              <div className='flex'>
                                   <button onClick={()=>{handleUpdateCartQty(items.id,items.quantity - 1)}} className='bg-gray-300 hover:bg-gray-400 active:bg-gray-300 font-bold rounded text-lg h-8 w-8'>-</button>
                                   <p class="text-gray-500 text-xl h-8 my-auto w-8">{items.quantity}</p>
                                   <button onClick={()=>{handleUpdateCartQty(items.id,items.quantity + 1)}}  className='bg-gray-300 hover:bg-gray-400  active:bg-gray-300 font-bold rounded text-lg  h-8 w-8'>+</button>
                              </div>

                              <div class="flex">
                              <button onClick={()=>{handleRemoveItem(items.id)}} type="button" class="font-medium text-light-pink hover:text-dark-pink">Remove</button>
                              </div>
                         </div>
                         </div>
                         </li>
                              
                         ))
                         }
                    </ul>
                    </div>
               </div>
               </div>

               </div>
               </div>
               <div class="border-t h-[25vh] border-gray-200 py-6 px-4 sm:px-6">
               <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{cartItems.subtotal.formatted_with_symbol}</p>
               </div>
               <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
               <div class="mt-6">
                    <Link to="/checkout" class="flex items-center justify-center rounded-md border border-transparent bg-light-pink px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-dark-pink">Checkout</Link>
               </div>
               <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                    or
                    <button type="button" class="font-medium mx-2 text-light-pink hover:text-dark-pink">
                         Continue Shopping
                         <span aria-hidden="true"> &rarr;</span>
                    </button>
                    </p>
               </div>
               </div>
                    

          </div>
          </div>
)
}

export default Mycart