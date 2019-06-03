import * as Types from "./actionTypes";
var initialState=[ {
    id:1,
    name:'Trang chủ',
    path: '/',
        },
    {
        id:2,
        name:'Iphone  ',
        path: '/iphone',
        },
    {
        id:3,
            name:'Sam sung',
            path: '/samsung',
        },
    {
        id:4,
                name:'Oppo',
                path: '/oppo',
        },
        {
            id:5,
            name:'Nokia',
            path: '/nokia',
    },
    {
        id:6,
        name:'Iphone 7',
        path: '/iphone7',
},

    {
        id:7,
        name:'Iphone 8',
        path: '/iphone8',
}
];

const category =(state =initialState ,action)=>{
   
    switch (action.type){
        case Types.LOAD_CATEGORY:
            state=action.category
            return [...state];


        default:return [...state];

       
    }
};

export default category;