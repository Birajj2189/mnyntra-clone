import React from "react";
import { ShoppingBagIcon } from '@heroicons/react/outline'

const Mens = ({onAddToCart ,products}) => {   

     return (
     <div className='my-12 '>
          <h1 className='text-5xl my-4 font-bold'>MENS COLLECTION</h1>
               <div className='text-3xl font-thin cursive'>Mad Discount this way</div>
        
               <div className="max-w-[90vw] grid lg:grid-cols-4 md:gap-2 md:grid-cols-2 grid-cols-1  mx-auto">
                    {products.map((user) => (
                              <div className="mx-auto w-full col-span-1 bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                   <a href="#">
                                        <img className="h-66 mx-auto w-full rounded-t-lg p-8" src={`${user.image.url}`} alt={`${user.image.url}`}/>
                              </a>
                                        <div className="px-5 pb-5">
                                             <a href="#">
                                                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{user.name}</h3>
                                             </a>
                                             <p className="flex mx-auto items-center mt-2.5 mb-5">{user.description}</p>
                                             <div className="flex mx-auto items-center mt-2.5 mb-5">
                                                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                       </path>
                                                  </svg>
                                                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                       </path>
                                                  </svg>
                                                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                       </path>
                                                  </svg>
                                                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                       </path>
                                                  </svg>
                                                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                       </path>
                                                  </svg>
                                                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                             </div>
                                             
                                             <div className="flex items-center justify-between">
                                                  <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{user.price.formatted_with_symbol}</span>
                                                  <button onClick={()=> onAddToCart(user.id,1)}
                                                       className="text-white flex bg-light-pink hover:bg-dark-pink font-medium rounded-lg text-md px-2 lg:px-5 py-2.5 text-center">Add
                                                       to cart <ShoppingBagIcon className="my-auto mx-2 h-4 w-4"/></button>
                                             </div>
                                        </div>
                              </div>
                     ))}    
               </div>                   
          </div>
     );
   };
   
   
   export default Mens;