import * as Types from "./actionTypes";
import products from "./products";
var initialState=[
    
    {   products :{
        id: 2,
        name: 'IPhone 6S Plus 64G',
        price:13000000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:2
         }, 
         quantity:2,
    },
    {   products :{
        id: 6,
        name: 'IPhone 7S Plus 64G',
        price:13000000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:2
         }, 
         quantity:2,
    }
];

var findIndex=(cart,products)=>{
    var result= -1;
    cart.forEach((cart,index) => {
      if(cart.products === products){
        result=index;
      }

    });
      return result;
 }
const cart =(state =initialState ,action)=>{
   
    switch (action.type){
        case Types.ADD_CART:
            var products=action.products;
           var carts=
            { products,
                quantity:1
            }
            ;
            state.push(carts);
          
            return [...state];
            case Types.UPDATE_QTY_CART:
                    var index =-1;
               var products=action.arr.products;
               var qty=action.arr.qty;
              index=findIndex(state,products);
              state[index].quantity=qty;
            
                    return [...state];
                    case Types.DELETE_PRODUCTS_CART:
                    var index =-1;
                    var products=action.products;
                 
                    index=findIndex(state,products);
                    state.splice(index,1);
            
                    return [...state];
    

        default:return [...state];

       
    }
};

export default cart;