import react from 'react';
import './Header.css';
import SearchIcon   from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
  return (
    <div className="header">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
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
            <div className="header_optionbasket">
                <ShoppingBasketIcon/>
                <span className="header_option2 header_basketcount">0</span>

            </div>

        </div>
    </div>
  );
}

export default Header;