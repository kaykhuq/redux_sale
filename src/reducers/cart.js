import * as types from '../constants/ActionType';

// var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
   {
      product: {
         id: 1,
         name: 'Iphone 7s',
         image: 'https://static.toiimg.com/photo/57775079/Apple-iPhone-7S-Plus.jpg',
         description: 'San pham do apple san xuat',
         price: 500,
         inventory: 10,
         rating: 3
      },
      quantity: 5,
   },
   {
      product: {
         id: 2,
         name: 'Samsung galaxy s8',
         image: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
         description: 'San pham do samsung san xuat',
         price: 700,
         inventory: 15,
         rating: 4
      },
      quantity: 2
   }
];

const cart = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_TO_CART:
         console.log(action);
         return [...state];
      default: return [...state];
   }
}
export default cart;