import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpdateQty,UpDeleteCart } from './../../../redux/actions';
import { Link} from 'react-router-dom';
    import Form from 'react-validation/build/form';
    import Input from 'react-validation/build/input';
    import CheckButton from 'react-validation/build/button';
    import { isEmail, isEmpty,isMobilePhone } from 'validator';
    const required = (value) => {
      if (isEmpty(value)) {
          return <small className="form-text text-danger">KHÔNG đuọc để trống</small>;
      }
    }
    const email = (value) => {
      if (!isEmail(value)) {
          return <small className="form-text text-danger">KHÔNG ĐÚNG ĐỊNH DẠNG EMAIL</small>;
      }
    }
    const minLength = (value) => {
      if (value.trim().length < 6) {
          return <small className="form-text text-danger">
            Phải trên 6 Ký tự
          </small>;
      }
    }
    const number =(value)=>{
      if (!isMobilePhone(value)) {
        return <small className="form-text text-danger">khong phai sdt</small>;
      }
    }
    
class Cart extends Component {
  constructor(props){
    super(props);
      
  }

  
    onUpdateQty=(e,products)=>{
    var arr={
      products:products,
      qty:e.target.value,
      
    };
    this.props.UpdateQty(arr);
      
    };
    onDeleteCart=(products)=>{
      if (confirm('Ban chac chan muon xoa ?')) { //eslint-disable-line
        this.props.UpDeleteCart(products);
      }
      
    }
  
   onSubmit=(e)=>{
     e.preventDefault();
   }
  render() {
   var id =parseInt(this.props.match.params.id);
    var { products,cart }=this.props;
    
    var { Mess }= this.props;
    console.log(Mess);
  return (
    <div id="wrap-inner">
    <div id="list-cart">
      <h3>Giỏ hàng</h3>
      <form>
        <table className="table table-bordered .table-responsive text-center">
          <tbody><tr className="active">
              <td width="11.111%">Ảnh mô tả</td>
              <td width="22.222%">Tên sản phẩm</td>
              <td width="22.222%">Số lượng</td>
              <td width="16.6665%">Đơn giá</td>
              <td width="16.6665%">Thành tiền</td>
              <td width="11.112%">Xóa</td>
            </tr>
           {
             cart.map((prod,index)=>{
                  
                    return(
                      <tr key={index}>
                      <td><img className="img-responsive" src={prod.products.img} /></td>
                      <td>{prod.products.name}</td>
                      <td>  
                       <select name="qty" onChange={(e)=>this.onUpdateQty(e,prod.products)}  >
                              <option value={prod.quantity} >{prod.quantity}</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                      </select>
                      </td>
                      <td><span className="price">{prod.products.price}</span></td>
                      <td><span className="price" name='price'>{prod.products.price*prod.quantity}</span></td>
                      
                      <td>
                      <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteCart(prod.products)}> Xoá </button>
                      </td>
                    </tr>
                    )                 
             })
           }  
           
           
          </tbody></table>
        <div className="row" id="total-price">
          <div className="col-md-6 col-sm-12 col-xs-12">										
            Tổng thanh toán: <span className="total-price" >    </span>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <a href="#" className="my-btn btn">Mua tiếp</a>
            <a href="#" className="my-btn btn">Cập nhật</a>
            <a href="#" className="my-btn btn">Xóa giỏ hàng</a>
          </div>
        </div>
      </form>             	                	
    </div>
    <div id="xac-nhan">
      <h3>Xác nhận mua hàng</h3>
      
      <span class="label label-success">{Mess}</span>
      
      <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <Input required type="email" className="form-control" id="email" name="email" validations={[required, email]} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Họ và tên:</label>
          <Input required type="text" className="form-control" id="name" name="name" validations={[required, minLength]}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại:</label>
          <Input required type="number" className="form-control" id="phone" name="phone" validations={[required,number]}/>
        </div>
        <div className="form-group">
          <label htmlFor="add">Địa chỉ:</label>
          <Input required type="text" className="form-control" id="add" name="add" validations={[required, minLength]}/>
        </div>
        <div className="form-group text-right">
          <button type="submit" className="btn btn-default">Thực hiện đơn hàng</button>
          <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
        </div>
      </Form>
    </div>
  </div>
  );
}
}

Cart.propTypes={
  products:PropTypes.arrayOf(
    PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        img:PropTypes.string.isRequired,
        id_category:PropTypes.number.isRequired
    })
  ).isRequired
}
const mapStateToProps = state =>{
  return {
    products:state.products,
    cart:state.cart,
    Mess:state.Mess
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    UpdateQty : (arr)=> {
      
       dispatch(UpdateQty(arr));
    },
    UpDeleteCart:(products)=>{
      dispatch(UpDeleteCart(products));
    }
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);