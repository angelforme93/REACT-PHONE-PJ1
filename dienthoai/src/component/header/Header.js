import React,{ Component } from 'react';
import { Switch,Route,Link,BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
class Header extends Component {
  
  

  render() {
   var { cart }=this.props;
   
  return (
    <header id="header">
    <div className="container">
      <div className="row">
        <div id="logo" className="col-md-3 col-sm-12 col-xs-12">
          <h1>
          <Link to="/"><img src="./sources/frontend/img/home/logo.png" /></Link>					
            <nav><a id="pull" className="btn btn-danger" href="#">
                <i className="fa fa-bars" />
              </a></nav>			
          </h1>
        </div>
        <div id="search" className="col-md-7 col-sm-12 col-xs-12">
          <input type="text" name="text" defaultValue="Nhập từ khóa ..." />
          <input type="submit" name="submit" defaultValue="Tìm Kiếm" />
        </div>
        <div id="cart" className="col-md-2 col-sm-12 col-xs-12">
          <Link className="display"to="/cart">Giỏ hàng</Link>
          <Link to="/cart">{ cart.length }</Link>		    
        </div>
      </div>			
    </div>
  </header>
   
	);
  }
}
const mapStateToProps = state =>{
  return {
    
    cart:state.cart
  }
}

export default connect(mapStateToProps,null)(Header);