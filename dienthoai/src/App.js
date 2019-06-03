import React,{ Component } from 'react';
import Header from './component/header/Header';
import Footer from './component/Footer/Footer';
import './sources/frontend/css/home.css';
import './sources/frontend/css/email.css';
import './sources/frontend/css/complete.css';
import Category from './component/Main/Category/Category';
import Slide from './component/Main/Slide';
import Nav from './component/Main/Nav';
import { Switch,Route,Link,BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Main/Home';
import Banner from './component/Main/Banner';
import Bannertop from './component/Main/Bannertop';
import Details from './component/Main/details/Details';
import Search from './component/Main/Search/Search';
import Cart from './component/Main/Cart/Cart';
import Email from './component/Main/Email/Email';
import Complete from './component/Main/Complete/Complete';

const formValidate = formERR =>{
  let valid =true;
  Object.values(formERR).forEach(val =>{
    val.length > 0 && (valid = false );
  });
  return valid
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      formERR:{
        emai:'',
        name:'',
        phone:'',
        addr:''
      }
    }
  }
  

  render() {
    
  return (
    <Router >
     <Header />
     <section id="body">
        <div className="container">
          <div className="row">
            <div id="sidebar" className="col-md-3">
              <Nav />
           <Banner />
            </div>
            <div id="main" className="col-md-9">
              {/* main */}
              {/* phan slide la cac hieu ung chuyen dong su dung jquey */}
             <Slide />
              <Bannertop />
                      {/* Thay doi trang trong nay */}
                      <Route path="/" exact component={ Home } />
                      <Route path="/category/:id"  component={ Category } />
                      <Route path="/detail/:id"  component={ Details } />
                      <Route path="/search"  component={ Search } />
                      <Route path="/cart"  component={ Cart } />
                      <Route path="/email"  component={ Email } />
                      <Route path="/complete"  component={ Complete } />
                        {/* Thay doi trang trong nay */}
           
              {/* end main */}
            </div>
          </div>
        </div>
      </section>
     <Footer />
      
      {/* <Route path="/suasp/:id"  component={ Sua } /> */}
     </Router >
  );
  }
}

export default App;
