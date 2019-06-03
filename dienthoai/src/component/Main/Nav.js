import React,{ Component } from 'react';
import { Switch,Route,Link,BrowserRouter as Router } from 'react-router-dom';
import Category from './Category/Category';
import Home from './Home';

import Details from './details/Details';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Email from './Email/Email';
import Complete from './Complete/Complete';
import { connect } from 'react-redux';
import { ABC } from './../../redux/actions';


class Nav extends Component {
  constructor(props){
    super(props);
     
      

  }
  onLoadCatagory (id){
    this.props.onProductID(id);
  }
  

  render() {
  var { category,products } = this.props;

  
const letNAV =category.map((cate,index)=>{
    return (
      <li className="menu-item" key={cate.id}><Link to={`/category/${cate.id}`} onClick={()=>this.onLoadCatagory(cate.id)}>{ cate.name }</Link></li>
    )
} );
  
  return (

<nav id="menu">
<ul>
  
  { letNAV }
 				
</ul>

</nav>
 
  );
}
}
const mapStateToProps = state =>{
  return {
    category:state.category,
    products:state.products
  
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
      onProductID : (id)=>{      
            
        dispatch(ABC(id));
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);