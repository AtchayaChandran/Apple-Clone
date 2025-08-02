import { } from '@heroicons/react/24/solid';

function Emi() {
   return (
      <>
         <div className="hidden md:flex items-center justify-center gap-2 text-gray-700 text-[13px] bg-white py-2">
            <p className="m-0">
               Get up to 12 months of No Cost EMI<sup>§</sup> plus up to ₹8000.00 instant cashback<sup>§§</sup> on selected products with eligible cards.
            </p>
            <span className="flex items-center text-blue-700 cursor-pointer hover:underline ml-2">
               See offers
               <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                  className="w-4 h-4 ml-1"><path strokeLinecap="round" strokeLinejoin="round"
                     d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
            </span>
         </div>

         <div className="md:hidden text-black text-[15px] bg-white p-4">
            <p className="m-0">
               Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant
               cashback‡ on selected products with eligible cards.

               <a className="items-center inline text-blue-700 font-semibold cursor-pointer hover:underline pl-[5px]">
                  Shop
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                  stroke="currentColor" class="size-3 inline font-semibold">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
               </a>
            </p>
         </div>
      </>
   )
}

export default Emi;
