import * as Types from './actionTypes';
import * as Message from './Message';

var initialState='CHAO MUNG BAN DEN VOI GIO HANG';


const Mess =(state =initialState ,action)=>{

    switch (action.type){
       case Types.ADD_CART:
           state =Message.MSG_ADD_TO_CADD;
           return [...state];
           case Types.UPDATE_QTY_CART:
           state =Message.MSG_UPDATE_TO_CADD;
           return [...state];
           case Types.DELETE_PRODUCTS_CART:
           state =Message.MSG_DELETE_TO_CADD;
           return [...state];
    

        default:return [...state];

       
    }
    
};

export default Mess;
 