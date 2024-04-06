// import React from 'react'

// export default function Footer() {
//   return (
//       <div style={{background:"lightgray",color:'black',width:'100%',position:"relative",paddingBottom:"20px",fontWeight:"500",fontSize:"20px",textAlign:'center'}}>
//   <div className="card-header">
//   <div className="card-body">
//     <h5 className="card-title">VISIONIYAM</h5>
//     <p className="card-text">A solution for paralyzed and disabled people to access technology.</p>
//     <p className="card-text">© Kirmada. All right reserved.</p>
//   </div>
// </div>
//   </div>
//   )
// }

import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(to right, #4b6cb7, #182848)',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <h2>Company Name</h2>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Contact: +1 234 567 890</p>
        <p>Email: info@example.com</p>
      </div>
      <div>
        <nav>
          <a style={iconStyle} href="#">Home</a>
          <a style={iconStyle} href="#">About Us</a>
          <a style={iconStyle} href="#">Services</a>
          <a style={iconStyle} href="#">Contact</a>
        </nav>
      </div>
      <div>
        <a href="#" style={iconStyle}><i className="fab fa-facebook-f"></i></a>
        <a href="#" style={iconStyle}><i className="fab fa-twitter"></i></a>
        <a href="#" style={iconStyle}><i className="fab fa-instagram"></i></a>
        <a href="#" style={iconStyle}><i className="fab fa-linkedin"></i></a>
      </div>
      <div>
        <input type="email" placeholder="Subscribe to Newsletter" style={{ padding: '5px', borderRadius: '5px' }} />
        <button style={{ padding: '5px 10px', marginLeft: '10px', background: 'white', borderRadius: '5px' }}>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;

