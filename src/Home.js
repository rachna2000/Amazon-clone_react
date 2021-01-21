import react from 'react';
import  './Home.css';
import home_logo from './img/home_logo.jpg';
import Product from './product.js'
function Home() {
  return (
    <div className="home">
        <div className="home_container">
        <img className="home_logo"src={home_logo} />
        <div className="home_row">
          <Product id="1238484" title="The Lean Startup:How Constant innovation Creates Radically Successful Business Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
          <Product id="49538094"
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater ,Dough Hook and Whisk ,5 Litre Glass Boul"
            price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
        </div>
        <div className="home_row">
          <Product id="387549"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming MOntior"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
          <Product id="2345930"
          title="Amazon Echo (3rd Generation) Smart speaker with Alexa ,Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
          <Product id="23459990"
          title="New Apple ipad Pro (12.9-inch,Wi-Fi,128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
        </div>
        <div className="home_row">
          <Product id="23459992"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1049.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
        </div>
        </div>
    </div>
  );
}

export default Home;