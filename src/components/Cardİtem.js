import React from 'react'
import { PricingContext } from "../context/PricingContext";
import { useContext } from 'react';
function Cardİtem() {
  const name=useContext(PricingContext)
  const {allPricing,setEnabled,enabled}=useContext(PricingContext)
  return (
    <div>
        <div className=' flex justify-center z-50   flex-col md:flex-row  items-center mt-16'>      
        <div className='bg-white text-center  rounded-xl w-80 card-small'>
              <h2 className=' text-black text-lg font-semibold mt-10'>Basic</h2>
              {enabled ? <h1 className='text-black mt-4 text-6xl font-semibold'>{allPricing.Full.Basic}</h1>:<h1 className='text-black mt-4 text-6xl font-semibold'>{}{allPricing.Montly.Basic}</h1>}
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-14'>
               </div>
               <p className='mt-3 text-black'>500GB Stroge</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-5'>
               </div>
               <p className='mt-3 text-black'>2 Users Allowed</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-5'>
               </div>
               <p className='mt-3 text-black'>Send up to 3 GB</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-2'>
               </div>
               <button className='mt-3 bg-transparent border border-purple-300 rounded-lg w-56 h-11'>Learn More</button>
         </div>
         <div className='bg-blue-500 text-center z-50 rounded-xl w-80 card'>
              <h2 className=' text-white font-semibold text-lg mt-10'>Professional</h2>
              {enabled?<h1 className='text-white mt-4 text-6xl font-semibold'>{allPricing.Full.Pro}</h1>:<h1 className='text-white mt-4 text-6xl font-semibold'>{allPricing.Montly.Pro}</h1>}
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-14'>
               </div>
               <p className='mt-3 text-white'>1TB Stroge</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-5'>
               </div>
               <p className='mt-3 text-white'>5 Users Allowed</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-5'>
               </div>
               <p className='mt-3 text-white'>Send up to 10 GB</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-2'>
               </div>
               <button className='mt-3 bg-transparent border border-white w-56 h-11'>Learn More</button>
         </div>
         <div className='bg-white text-center  rounded-xl w-80 card-small'>
              <h2 className=' text-black font-semibold text-lg mt-10'>Master</h2>
              {enabled?  <h1 className='text-black mt-4 text-6xl font-semibold'>{allPricing.Full.Master}</h1>:<h1 className='text-black mt-4 text-6xl font-semibold'>{allPricing.Montly.Master}</h1> } 
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-14'>
               </div>
               <p className='mt-3 text-black'>2TB Stroge</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-5'>
               </div>
               <p className='mt-3 text-black'>10 Users Allowed</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-5'>
               </div>
               <p className='mt-3 text-black'>Send up to 20 GB</p>
               <div className='border-b-2 flex ml-10 mr-10  border-gray-300 mt-2'>
               </div>
               <button className='mt-3 bg-transparent border border-purple-300 rounded-lg w-56 h-11'>Learn More</button>
         </div>
        </div>
    </div>
  )
}

export default Cardİtem