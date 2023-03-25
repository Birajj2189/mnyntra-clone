import React from "react";

const Womens = ({products}) => {   

     return (
     <div className='my-12 '>
          <h1 className='text-5xl my-4 font-bold'>WOMENS COLLECTION</h1>
               <div className='text-3xl font-thin cursive'>Mad Discount this way</div>
               <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                         <div class="flex flex-wrap -m-4">
                    {products.map((user) => (
                         <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow">
                              <a class="block relative h-60 rounded overflow-hidden">
                                   <img alt="ecommerce" class="object-cover object-top w-full h-full block" src={`${user.image.url}`}/>
                              </a>
                              <div class="mt-4">
                                   <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                   <h2 class="text-gray-900 title-font text-lg font-medium">{user.name}</h2>
                                   <p class="mt-1">{user.price.formatted_with_symbol}</p>
                              </div>
                         </div>
                    ))}    

                         </div>
                    </div>
               </section> 
          </div>
     );
   };
   
   
   export default Womens;