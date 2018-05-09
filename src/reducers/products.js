var initialState = [
   {
      id: 1,
      name: 'Iphone 7s',
      image: 'https://static.toiimg.com/photo/57775079/Apple-iPhone-7S-Plus.jpg',
      description: 'San pham do apple san xuat',
      price: 500,
      inventory: 10,
      rating:3
   },
   {
      id: 2,
      name: 'Samsung galaxy s8',
      image: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
      description: 'San pham do samsung san xuat',
      price: 700,
      inventory: 15,
      rating:4
   },
   {
      id: 3,
      name: 'Oppo F1s',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71t02iwgwqL._SL1440_.jpg',
      description: 'San pham do oppo san xuat',
      price: 300,
      inventory: 17,
      rating:2
   }
];

const products = (state = initialState, action) => {
   switch(action.type){
      default: return [...state];
   }
}
export default products;

