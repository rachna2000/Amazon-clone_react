import react from 'react';
import './Header.css';  
import SearchIcon   from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
function Header() {
  const [ {basket},dispatch]=useStateValue();
  console.log(basket);
  return (
    <div className="header">
       <Link to="/"> <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>
        <div className="header_search">
            <input className="header_input" type="text"></input>
            <SearchIcon className="header_searchicon" />
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className="header_option1">
                  Hello,Guest
                </span>
                <span className="header_option2">
                  Sign in
                </span>
            </div>
            <div className="header_option">
              <span className="header_option1">
                Returns
              </span>
              <span className="header_option2">
                &orders
              </span>
            </div>
            <div className="header_option">
              <span className="header_option1">
                Your
              </span>
              <span className="header_option2">
                prime

              </span>
            </div>
            <Link to="/checkout">
              <div className="header_optionbasket">
                  <ShoppingBasketIcon/>
                  <span className="header_option2 header_basketcount">{basket?.length}</span>

              </div>
            </Link>
        </div>
    </div>
  );
}

export default Header;