import React from 'react'
import { useState } from "react";
import { TagIcon,BadgeCheckIcon ,TrashIcon} from '@heroicons/react/outline'
import { useLocation,Link } from "react-router-dom"; 


const Content = ({cartItems , handleEmptyCart}) => {
     const [address, setAddress] = useState()
  return (
    <div>
     <section className="text-gray-600 body-font px-24">
  <div className="container flex flex-wrap px-5  mx-auto items-center">
    <div className="md:w-2/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <div className='flex justify-between my-2 items-center w-full rounded border-[1px] p-4'>
          <p className='text-md flex items-center'>Deliver to :</p>
          <span className='text-md font-bold'>{address}</span>
          <button
          type="button"
          className="inline-block rounded border-2 border-light-pink text-light-pink px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out"
          data-te-toggle="modal"
          data-te-target="#staticBackdrop"
          data-te-ripple-init
          data-te-ripple-color="light">
          CHANGE ADDRESS
          </button>
      </div>
     <div className='w-full p-4 border-[1px] my-2 rounded flex-col'>
          <div className='flex mb-4 items-center justify-start font-bold w-full'><BadgeCheckIcon className='mr-2 h-6 w-6'/>Available offers</div>
          <div className='flex  font-sm items-center justify-start w-full'><span className='mr-2'>*</span>10% instant discount on RuPay Credit Cards on a minimum spend of Rs.2,000. TCA</div>
          <div className='flex font-sm  items-center justify-start w-full'><span className='mr-2'>*</span>Get upto RS.500 cashback on CRED Pay UPI &#40;Android devices only&#41; on a minimum spend of RS.1,000. TCA</div>
          <div className='flex font-sm  items-center justify-start w-full'><span className='mr-2'>*</span>5% unlimited Cashback on FLipkart Axis Bank Credit Cards. TCA</div>
          <div className='flex font-sm  items-center justify-start w-full'><span className='mr-2'>*</span>10% Cashback upto Rs.150 on Freecharge Paylater transaction. TCA</div>
     </div>
     
     <div className='w-full p-4  my-4 rounded flex justify-between'>
          <div className='font-bold text-black'>{cartItems.total_unique_items} ITEMS SELECTED</div>
          <button onClick={()=>{handleEmptyCart()}} className='font-bold hover:text-gray-700 active:text-gray-700'>REMOVE</button>
     </div>

     {cartItems.line_items.map((item) => (
          <div className='w-full p-4 border-[1px] my-2 rounded flex'>
               <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container mx-auto md:mx-0">
                    <div class=" mx-auto md:mx-0 flex flex-wrap">
                         <img alt="ecommerce" class="h-48 object-cover object-center rounded" src={`${item.image.url}`}/>
                         <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                         <h2 class="text-sm flex title-font text-gray-500 tracking-widest">BRAND</h2>
                         <h1 class="text-gray-900text-md flex title-font font-medium mb-1">{item.name}</h1>
                         <div class="flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-2">
                              <div class="flex">
                              <span class="mr-3">Color</span>
                              <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                              <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                              <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                              </div>
                              <div class="flex ml-6 items-center">
                              <span class="mr-3">Size</span>
                              <div class="relative">
                              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                   <option>SM</option>
                                   <option>M</option>
                                   <option>L</option>
                                   <option>XL</option>
                              </select>
                              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                   <path d="M6 9l6 6 6-6"></path>
                                   </svg>
                              </span>
                              </div>
                              <div className='flex ml-8'>
                                        <div className='mr-3 flex items-center'>Qty </div>
                                        <button className='bg-gray-300 hover:bg-gray-400 active:bg-gray-300 font-bold rounded text-lg h-8 w-8'>-</button>
                                        <p class="text-gray-500 text-xl h-8 my-auto w-8">{item.quantity}</p>
                                        <button  className='bg-gray-300 hover:bg-gray-400  active:bg-gray-300 font-bold rounded text-lg  h-8 w-8'>+</button>
                                   </div>
                              </div>
                         </div>
                         <div class="flex w-full">
                              <span class="title-font font-medium text-2xl text-gray-900">{item.line_total.formatted_with_symbol}</span>
                              <button class="p-2 rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-400 active:bg-gray-200 border-0 inline-flex items-center justify-center text-gray-300 ml-4">
                                   <TrashIcon className='h-6 text-light-pink'/>
                              </button>
                         </div>
                         </div>
                    </div>
                    </div>
                    </section>


          </div>
     ))
     }
     {/* Coupons menu */}
     <div
  data-te-modal-init
  class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalCenter"
  tabindex="-1"
  aria-labelledby="exampleModalCenterTitle"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-1/2 mx-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalScrollableLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="relative p-4">
        <p>This is a vertically centered modal.</p>
      </div>
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          class="inline-block rounded bg-gray-200 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-light-pink transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-200 active:bg-gray-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          class="ml-1 inline-block rounded bg-light-pink px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-dark-pink focus:bg-light-pink focus:outline-none focus:ring-0 active:bg-light-pink"
          data-te-ripple-init
          data-te-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>


     {/*Address menu  */}
     <div
     data-te-modal-init
     className="fixed p-auto top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
     id="staticBackdrop"
     data-te-backdrop="static"
     data-te-keyboard="false"
     tabindex="-1"
     aria-labelledby="staticBackdropLabel"
     aria-hidden="true">
     <div
     data-te-modal-dialog-ref
     className="pointer-events-none relative w-1/2 translate-y-[-50px] mx-auto my-auto opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
     <div
          className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
          <div
          className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <h5
               className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
               id="exampleModalLabel">
               Modal title
          </h5>
          <button
               type="button"
               className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
               data-te-modal-dismiss
               aria-label="Close">
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
          </button>
          </div>
          <div data-te-modal-body-ref className="relative p-4">...</div>
          <div
          className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <button
               type="button"
               className="inline-block rounded bg-gray-200 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-light-pink transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-200 active:bg-gray-200"
               data-te-modal-dismiss
               data-te-ripple-init
               data-te-ripple-color="light">
               Close
          </button>
          <button
               type="button"
               className="ml-1 inline-block rounded bg-light-pink px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-dark-pink focus:bg-light-pink focus:outline-none focus:ring-0 active:bg-light-pink"
               data-te-ripple-init
               data-te-ripple-color="light">
               Understood
          </button>
          </div>
     </div>
     </div>
     </div>


    </div>
    <div className="flex items-start flex-col md:w-1/3 md:pl-12">
     <div className='flex-col w-full '>
          <h2 className="title-font flex font-bold text-gray-800 tracking-wider text-sm mb-3">COUPONS</h2>
          <div className='flex justify-between items-center w-full'>
               <div className='flex w-full justify-start'><TagIcon className='h-6 mr-3'/>Apply coupons</div>
                    <button
                    type="button"
                    class="inline-block rounded border-2 border-light-pink text-light-pink px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out"
                    data-te-toggle="modal"
                    data-te-target="#exampleModalCenter"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    APPLY
                    </button>
          </div>    
     </div>
     <div className='flex-col w-full py-6 border-b-[1px]'>
          <h2 className="title-font flex font-bold text-gray-800 tracking-wider text-sm mb-3">PRICE DETAILS ( {cartItems.total_unique_items} items selected )</h2>
          <div className='flex justify-between items-center w-full'>
               <div className='flex w-full justify-start'>Total MRP</div>
               <div>{cartItems.subtotal.formatted_with_symbol}</div>
          </div>    
          <div className='flex justify-between items-center w-full'>
               <div className='flex w-full justify-start '>Total Discount</div>
               <div className='text-green'>{cartItems.currency.symbol}0</div>
          </div>    
          <div className='flex justify-between items-center w-full'>
               <div className='flex w-full justify-start'>Convenience Fee</div>
               <div>{cartItems.currency.symbol}0</div>
          </div>     
     </div>
  
     <div className='flex-col w-full py-6'>
          <div className='flex font-bold justify-between items-center w-full'>
               <div className='text-black flex w-full justify-start'>Total Amount</div>
               <div className='text-black'>{cartItems.subtotal.formatted_with_symbol}</div>
          </div>    
          <Link to="/billing-address" className='w-full my-4 flex justify-center items-center p-2 font-bold rounded bg-light-pink hover:bg-dark-pink active:bg-light-pink text-white'>PLACE ORDER</Link>
      
     </div>
  

    </div>
  </div>
</section>
    </div>
  )
}

export default Content