import React from 'react'
import { Footer } from 'flowbite-react';
import { BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs';
import  logo from '../../assets/img/Conia_soft_-_CLOUD-icon-removebg-preview (1) 1.svg'


const FooterComponent = () => {
  return (
      <section className=' bg-bg-color '>
        <Footer className='w-full py-8 bg-transparent '>
       <div className="w-full">
        <div className="container grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className=''>
            <img src={logo} alt=""  />
            <Footer.LinkGroup col>
              <p className='mb-10 mt-10 text-text-colorwhite '>Nulla diam felis, malesuada ut erat quis, mattis dignissim
                 justo. Cras cursus, lacus et dignissim volutpat</p>  
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Quickl Links"  className='text-text-colorwhite font-bold ' />
            <Footer.LinkGroup col  className='text-text-colorwhite ' >
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#">Features</Footer.Link>
              <Footer.Link href="#">Product</Footer.Link>
              <Footer.Link href="#">Pricing</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="services" className='text-text-colorwhite font-bold ' />
            <Footer.LinkGroup col className='text-text-colorwhite '>
              <Footer.Link href="#">Shared Web</Footer.Link>
              <Footer.Link href="#">Hosting</Footer.Link>
              <Footer.Link href="#">VPS Hosting</Footer.Link>
              <Footer.Link href="#">Dedicated server</Footer.Link>
              <Footer.Link href="#">Cloud Hosting</Footer.Link>
              <Footer.Link href="#">Domain Names</Footer.Link>
              <Footer.Link href="#">License Keys</Footer.Link>
              {/* <Footer.Link href="#">Terms &amp; Conditions</Footer.Link> */}
            </Footer.LinkGroup>
          </div>
          <div className=''>
            <Footer.Title title="Contact Us" className='text-text-colorwhite font-bold'  />
            <Footer.LinkGroup col className='text-text-colorwhite ' >
              <Footer.Link href="#" className='leading-tight'>Support@E_ConaiSoft.com</Footer.Link>
              <Footer.Link href="#">+44 123455 789-9</Footer.Link>
              <Footer.Link href="#" className='text-text-colorwhite font-bold' >Follow Us</Footer.Link>
            <div className="mt-4 flex space-x-4">
            <Footer.Icon href="#" icon={BsFacebook} className='text-white'  />
            <Footer.Icon href="#" icon={BsTwitter}  className='text-blue-500' />
            <Footer.Icon href="#" icon={BsLinkedin}  className='text-white'/>
          </div>
            </Footer.LinkGroup>
          </div>
        </div>
        
      </div>
      
    </Footer>
    <div className="w-full bg-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
         <p>© Copyright Ⓒ Coniasoft Cloud. All Rights Reserved.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center list-style-type: none; ">
            <Footer.Link href="#" className='list-style-type: none;'>Privacy Policy | Terms Conditions</Footer.Link>
            
          </div>
        </div>

      </section>
  )
}

export default FooterComponent