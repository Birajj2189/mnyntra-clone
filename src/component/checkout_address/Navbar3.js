import React from 'react'
import { ShieldCheckIcon } from '@heroicons/react/outline'

const Navbar3 = () => {
  return (
    <div>
          <header class="text-gray-600 body-font border-b-[1px]">
  <div class="container max-w-[100vw] flex flex-wrap px-12 py-8 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-12 w-18" src="./myntra.jpeg" alt="" />
    </a>

     {/* Breadcrumb */}
     <nav class="bg-grey-light rounded-md md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ol class="list-reset flex">
          <li>
               <a
               href="#"
               class="text-green transition duration-150 ease-in-out font-bold text-sm"
               >HOME</a
               >
          </li>
          <li>
               <span class="text-green mx-2 text-neutral-500 dark:text-neutral-400">----------</span>
          </li>
          <li>
               <a
               href="#"
               class="text-green transition duration-150 ease-in-out font-bold text-sm "
               >ADDRESS</a
               >
          </li>
          <li>
               <span class="mx-2 text-neutral-500 dark:text-neutral-400">----------</span>
          </li>
          <li class="text-neutral-500 dark:text-neutral-400 text-sm font-bold">PAYMENT</li>
          </ol>
          </nav>



    <div class="flex justify-center items-center w-36 border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
          <ShieldCheckIcon className='text-green h-16 w-16'/>
          <span className='w-18 font-bold'>100% SECURE</span>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar3