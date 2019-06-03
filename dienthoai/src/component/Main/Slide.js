import React,{ Component } from 'react';


class Slide extends Component {
  
  

  render() {
   
  return (
    <div id="slider">
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} />
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./sources/frontend/img/home/slide-1.png" alt="Los Angeles" />
        </div>
      
      </div>
      {/* Left and right controls */}
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </div>
  );
}
}



export default Slide;