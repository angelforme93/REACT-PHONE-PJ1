import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { Addcart } from './../../../redux/actions';

import Form from 'react-validation/build/form';
    import Input from 'react-validation/build/input';
    import CheckButton from 'react-validation/build/button';
    import { isEmail, isEmpty } from 'validator';

const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">KHÔNG ĐÚNG ĐỊNH DẠNG EMAIL</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">KHÔNG ĐÚNG ĐỊNH DẠNG EMAIL</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 6) {
      return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
  }
}
const maxLength = (value) => {
  if (value.trim().length > 8) {
      return <small className="form-text text-danger">Qua nhieu ky tu</small>;
  }
}

class Details extends Component {
  constructor(props){
    super(props);
    
}

  onAddCart=(products)=>{
    this.props.onAddCart(products);
  }
  

  render() {
    var { products }=this.props;
   var pid=parseInt(this.props.match.params.id);



   const prodELM= products.map((prod,index)=>{
    if(prod.id === pid ){
      return(
        <div key={index}>
        <div id="product-info">
      <div className="clearfix" />
      <h3>{prod.name}</h3>
      <div className="row">
        <div id="product-img" className="col-xs-12 col-sm-12 col-md-3 text-center">
          <img src={ prod.img } />
        </div>
        <div id="product-details" className="col-xs-12 col-sm-12 col-md-9">
          <p>Giá: <span className="price">{prod.price}</span></p>
          <p>Bảo hành: 1 đổi 1 trong 12 tháng</p>
          <p>Phụ kiện: Dây cáp sạc, tai nghe</p>
          <p>Tình trạng: Máy mới 100%</p>
          <p>Khuyến mại: Hỗ trợ trả góp 0% dành cho các chủ thẻ Ngân hàng Sacombank</p>
          <p>Còn hàng: Còn hàng</p>
          <p className="add-cart text-center"><button onClick={()=>this.onAddCart(prod)}>Đặt hàng online</button></p>
          
        </div>
      </div>
    </div>
    <div id="product-detail">
      <h3>Chi tiết sản phẩm</h3>
      <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="comment">
      <h3>Bình luận</h3>
      <div className="col-md-9 comment">
      <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                <Input 
                                    name="email" 
                                   
                                    type="text" 
                                    placeholder="Email"
                                    className="form-control" 
                                    validations={[required, email]}
                                />
                                <Input 
                                    name="name" 
                                    
                                    type="text" 
                                    placeholder="Name"
                                    className="form-control" 
                                    validations={[required, minLength,maxLength]}
                                />
                                
                                <button className="btn btn-info btn-block login" type="submit">Login</button>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
       </Form>
      </div>
    </div>
   
    </div>
      )
    }

  })
   
  return (

    <div id="wrap-inner">
    {prodELM  }
     
    
  </div>

  );
}
}


const mapStateToProps = state =>{
  return {
    products:state.products
  
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    onAddCart : (products)=> {
    dispatch(Addcart(products));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Details);
