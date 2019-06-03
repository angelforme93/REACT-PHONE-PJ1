import * as Types from "./actionTypes";
import products from "./products";

export const ABC= ( id)=>{
    return{
       
        type : Types.LOAD_PRO_CATE,
        id,
    }
}
export const Addcart= (products)=>{
    return{
       
         type : Types.ADD_CART,
         products
    }
}
export const UpdateQty= (arr)=>{
   
    return{
                              
         type : Types.UPDATE_QTY_CART,
         arr
    }
}
export const UpDeleteCart= (products)=>{

    return{
                              
         type : Types.DELETE_PRODUCTS_CART,
         products
    }
}

