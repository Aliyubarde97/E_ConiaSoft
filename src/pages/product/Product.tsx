import EArchiveInvoice from "./EArchiveInvoice"
import EDeliveryNote from "./EDeliveryNote"
import Einvoice from "./Einvoice"
import Eproducer from "./Eproducer"

import HeroFeature from "./HeroProduct"
import Process from "./Process"

const Features = () => {
  return (
    <>
        <HeroFeature/>
        <Einvoice/> 
        <EArchiveInvoice/>
        <EDeliveryNote/>
        <Eproducer/> 
        <Process/>   
    </>
  )
}

export default Features