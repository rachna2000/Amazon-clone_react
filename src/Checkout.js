import react from 'react';
import './checkout.css';

import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";

function Checkout() {
  return (
   
     <div className="checkout">
          <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
          <div className="checkout_total">
         <div className="checkout_left">
            
        
         <div>
             <h2>Your Shopping Basket</h2>
         </div>
         </div>
         <div className="checkout_right">
             <h2>subtotal will go here</h2>
         </div>
         </div>
    </div>
  );
      
}

export default Checkout;
