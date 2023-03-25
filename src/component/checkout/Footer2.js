import React from 'react'

const Footer2 = () => {
  return (
    <div>
     <footer
          className="border-t-[1px] bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
          <div className="mx-auto container px-6 py-2">
          <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-6">
               <div className="mb-6 lg:mb-0">
               <img
                    src="./visa.png"
                    className="h-12 w-auto border-[1px] rounded p-2 shadow-lg" />
               </div>
               <div className="mb-6 lg:mb-0">
               <img
                    src="./paypal.png"
                    className="h-12 w-auto border-[1px] rounded p-2 shadow-lg" />
               </div>
               <div className="mb-6 lg:mb-0">
               <img
                    src="./rupay.png"
                    className="h-12 w-auto border-[1px] rounded p-2 shadow-lg" />
               </div>
               <div className="mb-6 lg:mb-0">
               <img
                    src="./mastercard.jpg"
                    className="h-12 w-auto border-[1px] rounded p-2 shadow-lg" />
               </div>
               <div className="mb-6 lg:mb-0">
               <img
                    src="./bhim.jpg"
                    className="h-12 w-auto border-[1px] rounded p-2 shadow-lg" />
               </div>
               <div className="mb-6 lg:mb-0">
               <img
                    src="./mastercard.jpg"
                    className="h-12 w-auto border-[1px] rounded p-2 shadow-lg" />
               </div>
          </div>
          </div>
          </footer>
    </div>
  )
}

export default Footer2