import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { onDetailIDRequest } from './../../redux/actions';
import { Link} from 'react-router-dom';
class Home extends Component {
  
  
  
  render() {
   var { products }=this.props;


   const letPRODUCTS = products.map((prod,index)=>{
        return (
          <div className="product-item col-md-3 col-sm-6 col-xs-12" key={index}>
          <a href=""><img src={prod.img} className="img-thumbnail" /></a>
          <p><a href="#">{prod.name}</a></p>
          <p className="price">{prod.price}</p>	  
          <div className="marsk">
            <Link to={`/detail/${prod.id}`}>Xem chi tiết</Link>
          </div>
          </div>
        )
   })

  return (
<div id="wrap-inner">
<div className="products">
  <h3>sản phẩm nổi bật</h3>
  <div className="product-list row">
    
    {/* <div className="product-item col-md-3 col-sm-6 col-xs-12">
      <a href="#"><img src="./sources/frontend/img/home/product-1.png" className="img-thumbnail" /></a>
      <p><a href="#">iPhone 6S Plus 64G</a></p>
      <p className="price">10.000.000</p>	  
      <div className="marsk">
        <a href="#">Xem chi tiết</a>
      </div>                      	                        
    </div> */}
    { letPRODUCTS }
    
   
    
    
    
  </div>    
</div>
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
  
  
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);