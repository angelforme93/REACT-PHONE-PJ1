import React,{ Component } from 'react';


class Footer extends Component {
  
  

  render() {
   
  return (
   
   
    <footer id="footer">			
    <div id="footer-t">
      <div className="container">
        <div className="row">				
          <div id="logo-f" className="col-md-3 col-sm-12 col-xs-12 text-center">						
            <a href="#"><img src="./sources/frontend/img/home/logo.png" /></a>		
          </div>
          <div id="about" className="col-md-3 col-sm-12 col-xs-12">
            <h3>About us</h3>
            <p className="text-justify">Vietpro Academy thành lập năm 2009. Chúng tôi đào tạo chuyên sâu trong 2 lĩnh vực là Lập trình Website &amp; Mobile nhằm cung cấp cho thị trường CNTT Việt Nam những lập trình viên thực sự chất lượng, có khả năng làm việc độc lập, cũng như Team Work ở mọi môi trường đòi hỏi sự chuyên nghiệp cao.</p>
          </div>
          <div id="hotline" className="col-md-3 col-sm-12 col-xs-12">
            <h3>Hotline</h3>
            <p>Phone Sale: (+84) 0988 550 553</p>
            <p>Email: sirtuanhoang@gmail.com</p>
          </div>
          <div id="contact" className="col-md-3 col-sm-12 col-xs-12">
            <h3>Contact Us</h3>
            <p>Address 1: B8A Võ Văn Dũng - Hoàng Cầu Đống Đa - Hà Nội</p>
            <p>Address 2: Số 25 Ngõ 178/71 - Tây Sơn Đống Đa - Hà Nội</p>
          </div>
        </div>				
      </div>
      <div id="footer-b">				
        <div className="container">
          <div className="row">
            <div id="footer-b-l" className="col-md-6 col-sm-12 col-xs-12 text-center">
              <p>Học viện Công nghệ Vietpro - www.vietpro.edu.vn</p>
            </div>
            <div id="footer-b-r" className="col-md-6 col-sm-12 col-xs-12 text-center">
              <p>© 2017 Vietpro Academy. All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div id="scroll">
          <a href="#"><img src="./sources/frontend/img/home/scroll.png" /></a>
        </div>	
      </div>
    </div>
  </footer>
   
  );
  }
}



export default Footer;
