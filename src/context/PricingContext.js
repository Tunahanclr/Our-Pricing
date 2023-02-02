import { createContext } from "react";
import { useState } from "react";

export const PricingContext=createContext()

export const PricingProvider=({children})=>{
        const allPricing={
            Full:{
                Basic:'$199.99',
                Pro:'$249.99',
                Master:'$399.99',
            },
            Montly:{
                Basic:'$19.99',
                Pro:'$24.99',
                Master:'$39.99', 
            }
        }
    const [enabled, setEnabled] = useState(false)
    return(
        <PricingContext.Provider value={{allPricing,enabled,setEnabled}}>{children}</PricingContext.Provider>
    )
}