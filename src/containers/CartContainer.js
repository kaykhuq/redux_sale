import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../conponents/Cart';
import * as actions from '../actions/index';
import CartItem from '../conponents/CartItem';
import CartResult from '../conponents/CartResult';
import PropTypes from 'prop-types';
import * as Message from '../constants/Message';

class CartContainer extends Component {
   render() {
      var { cart } = this.props;
      return (
         <Cart >
            {this.showCartItem(cart)}
            {this.showTotalAmount(cart)}
         </Cart>
      );
   }
   showCartItem = (cart) => {
      var result = Message.MSG_CART_EMPTY;
      if (cart.length > 0) {
         result = cart.map((item, index) => {
            return <CartItem
               key={index}
               item={item}
               index={index}
            />
         })
      }
      return result;
   }
   showTotalAmount=(cart)=>{
      var result=null;
      if(cart.length>0){
         result= <CartResult cart={cart} />
         
      }
      return result;
   }

}

CartContainer.propTypes = {
   cart: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
         }).isRequired,
         quantity: PropTypes.number.isRequired
      })
   ).isRequired
}

const mapStateToProps = (state) => {
   return {
      cart: state.cart
   };
}
const mapDispatchToProps = (dispatch, props) => {
   return {
      onAddToCart: (cart) => {
         dispatch(actions.actAddToCart(cart))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);