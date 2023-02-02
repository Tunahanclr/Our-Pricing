import { useContext } from "react";
import Toggle from "./components/Toggle";
import { PricingContext } from "./context/PricingContext";
import Cardİtem from "./components/Cardİtem";
function App() {
  const name=useContext(PricingContext)
  const {allPricing,setEnabled,enabled}=useContext(PricingContext)

  return (
    <>
    <Toggle/>
    <Cardİtem/>
    </>
  );
}

export default App;
