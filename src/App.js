import React, { Component } from 'react';
import Header from './conponents/Header';
import Products from './conponents/Products';
import Message from './conponents/Message';
import Cart from './conponents/Cart';
import Footer from './conponents/Footer';
class App extends Component {
  render() {
    return (
      <div>

        {/* <!-- Header --> */}
        <Header />
        
        <main id="mainContainer">
            <div className="container">

                {/* <!-- Products --> */}
                <Products />

                {/* <!-- Message --> */}
                <Message />

                {/* <!-- Cart --> */}
                <Cart />
            </div>
        </main>

        {/* <!-- Footer --> */}
        <Footer />
    </div>
    );
  }
}

export default App;
