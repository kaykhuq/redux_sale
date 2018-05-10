import React, { Component } from 'react';
import Header from './conponents/Header';
// import Products from './conponents/Products';
// import Message from './conponents/Message';
// import Cart from './conponents/Cart';
import Footer from './conponents/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>

        {/* <!-- Header --> */}
        <Header />
        
        <main id="mainContainer">
            <div className="container">

                {/* <!-- Products --> */}
                <ProductsContainer />

                {/* <!-- Message --> */}
                <MessageContainer />

                {/* <!-- Cart --> */}
                <CartContainer />
            </div>
        </main>

        {/* <!-- Footer --> */}
        <Footer />
    </div>
    );
  }
}

export default App;
