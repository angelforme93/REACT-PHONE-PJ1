import * as Types from "./actionTypes";
var initialState=[
    {
        id: 1,
        name: 'IPhone 6S Plus 64G',
        price:13000000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:2
    }, 
    {
        id: 2,
        name: 'IPhone 7S Plus 64G',
        price:13300000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:2
    },
    {
        id: 3,
        name: 'IPhone 8S Plus 64G',
        price:13300000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:2
    },
    {
        id: 4,
        name: 'Sam sung 7SE',
        price:13020000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:3
    },
    {
        id: 5,
        name: 'Sam sung A5',
        price:17000000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:3
    },
    {
        id: 6,
        name: 'Sam sung A3',
        price:14000000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:3
    },
    
    {
        id: 7,
        name: 'Oppo Neo5',
        price:14000000,
        img:"./sources/frontend/img/home/product-1.png",
        id_category:2
    }
];


const products =(state =initialState ,action)=>{
   var id=action.id;
    switch (action.type){
        case Types.LOAD_PRODUCTS:
            state=action.id
            return [...state];
           
    

        default:return [...state];

       
    }
};

export default products;