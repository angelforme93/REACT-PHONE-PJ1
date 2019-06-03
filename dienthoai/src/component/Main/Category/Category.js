import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

class Category extends Component {
  
  

  render() {
    var pid=parseInt(this.props.match.params.id);
    
  
 var { products }=this.props;
 const ProdElem=products.map((prod,index)=>{
  
       if(prod.id_category === pid){
         return (
          <div className="product-item col-md-3 col-sm-6 col-xs-12" key={index}>
          <a href="#"><img src={ prod.img } className="img-thumbnail" /></a>
          <p><a href="#">{prod.name}</a></p>
          <p className="price">{prod.price}</p>	  
          <div className="marsk">
          <Link to={`/detail/${prod.id}`}>Xem chi tiết</Link>
          </div>                                    
        </div>
         )

       }
 })
   
  return (
	<div id="wrap-inner">
        <div className="products">
          <h3>SamSung</h3>
          <div className="product-list row">
           
            {  ProdElem }
         
          </div>                	                	
        </div>
        <div id="pagination">
          <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
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

export default connect(mapStateToProps,null)(Category);