import React,{ Component } from 'react';


class Search extends Component {
  
  

  render() {
   
  return (
    <div id="wrap-inner">
    <div className="products">
      <h3>Tìm kiếm với từ khóa: <span>Samsung</span></h3>
      <div className="product-list row">
        <div className="product-item col-md-3 col-sm-6 col-xs-12">
          <a href="#"><img src="./sources/frontend/img/home/product-1.png" className="img-thumbnail" /></a>
          <p><a href="#">iPhone 6S Plus 64G</a></p>
          <p className="price">10.000.000</p>	  
          <div className="marsk">
            <a href="#">Xem chi tiết</a>
          </div>                                    
        </div>
        
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



export default Search;