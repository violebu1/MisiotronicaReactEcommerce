/*import React from "react";
//import { CDBFooter, CDBFooterLink, CDBdiv, CDBIcon, CDBContainer } from 'cdbreact';

const Footer = () => {
  return (
    <Footer className="shadow">
      <div
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      ></div>
      <div display="flex" alignItems="center">
        <a href="/" className="d-flex align-items-center p-0 text-dark">
          <img
            alt="logo"
            src="data:image/png;base64,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"
            width="30px"
          />
          <span className="ms-4 h5 mb-0 font-weight-bold">Devwares</span>
        </a>
        <small className="ms-2">
          &copy; Devwares, 2023. All rights reserved.
        </small>
      </div>
      <div display="flex">
        <div flat color="dark" className="p-2">
          <div fab icon="facebook-f" />
        </div>
        <div flat color="dark" className="mx-3 p-2">
          <div fab icon="twitter" />
        </div>
        <div flat color="dark" className="p-2">
          <div fab icon="instagram" />
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
*/
/*
import React from 'react';
//import logo2 from '../assetsMisiotronica/logo2.png';
//import { Styled } from 'DONDE


function Footer() {

  return (
    
    <footer className="bg-light text-center text-white">
    
    <div className="container p-4 pb-0">
     
      <section className="mb-4">
        
        <a
          className="div text-white div-floating m-1"
          style="background-color: #3b5998"
          href="#!"//facebook
          role="button"
          ><i className="fab fa-facebook-f"></i
        ></a>
  
        
       
        <a //instagram
          className="div text-white div-floating m-1"
          style="background-color: #ac2bac;"
          href="#!"
          role="button"
          ><i className="fab fa-instagram"></i
        ></a>
  
        
        <a //linkedin
          className="div text-white div-floating m-1"
          style="background-color: #0082ca;"
          href="#!"
          role="button"
          ><i className="fab fa-linkedin-in"></i
        ></a>
        
        <a //github
          className="div text-white div-floating m-1"
          style="background-color: #333333;"
          href="#!"
          role="button"
          ><i className="fab fa-github"></i
        ></a>
      </section>
     
    </div>
    
  
  
    <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copy-left:
      <a className="text-white" href="https://mdbootstrap.com/">Violebu1</a>
    </div>
    
    </footer>



  );

}
  
 
export default Footer;

*/


import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
          <FaWhatsapp size={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
          <FaLinkedin size={24} />
        </a>
      </div>
      <p style={{ marginTop: '10px' }}>Síguenos en nuestras redes sociales</p>
    </footer>
  );
};

export default Footer;