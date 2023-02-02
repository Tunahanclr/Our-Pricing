import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useContext } from 'react'
import { PricingContext } from '../context/PricingContext'
function Toggle() {
    const {allPricing,setEnabled,enabled}=useContext(PricingContext)
  return (
    <div>
        <h1 className='text-center mt-10 text-4xl font-semibold text-gray-600'>Our Pricing</h1>
<div className='flex justify-center items-center gap-5 mt-20'>
        <div>
            <p>Montly</p>
        </div>
        <div>
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600'  : 'bg-green-500'
      } relative inline-flex   h-10 w-20 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-12'  : 'translate-x-1'
        } inline-block h-4 w-4  transform rounded-full bg-white transition`}
      />
    </Switch>
  </div>
        <div>
            <p>Annually</p>
        </div>
     
    </div>
    </div>

 
  )
}


export default Toggle