import react from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
function Subtotal() {
  const [ {basket},dispatch]=useStateValue();
  
  return (
      <div className="subtotal">
        <CurrencyFormat
            renderText={(value)=> (
                <>
             
                    <p>Subtotal({basket?.length} items):<strong>
                        0</strong></p>
                    <small className="subtotal_gift"><input type="checkbox"/>This order contains a gift</small>
               </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thosandSeperator={true}
            prefix={"₹"}
            >
        </CurrencyFormat>
        <button>Proceed to Checkout</button>
      </div>
  );
}
export default Subtotal;