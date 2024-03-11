/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link} from 'react-router-dom' 
import logo from '../../assets/img/eConiaSoft final.jpg'
import { List, X } from 'phosphor-react'
import Mobile from '../Layout/Mobile'

import '../Navigation/Navigation.css'


const Navbar = () => {

  const[showMobileNav, SetShowMobileNav]= useState(false);

 
  

  return (
    <>
    {/* mobile */}
    <Mobile
    show = {showMobileNav}
    setClose ={()=> SetShowMobileNav(false)}
    />

    <nav  className='Nav bg-bg-white w-full h-[90px] justify-center items-center  border-b'>
      <div className='container'>
      <div className='flex justify-between  items-center gap-3 font-medium'>
          <div className='inline-block'>
            <Link to={'#'}>
            <img src={logo} alt="" className='md:cursor-pointer w-full h-[76px] '/>
            </Link>
            </div>
          <div className=''>
          <ul className='md:flex hidden font-[poppins]'>
            <li className='flex justify-start items-start gap-8'>
              <Link to="/" className='hover:border-b-2 border-bg-color'>
                HOME
              </Link>
              <div className='dropDown inline-block cursor-pointer relative'>
                  <span  className=' hover:border-b-2 border-bg-color cursor-pointer'>FEATURES</span>
                    <ul className='dropDown-List w-full min-w-max border rounded-lg shadow-md  absolute top-7 left-0  bg-bg-color z-50'>
                    <li className='hover:bg-white  px-2  mb-2'><Link to={''}>E_Archive</Link></li>
                    <li className='hover:bg-white  px-2  mb-2'><Link to={''}>E_Invoice</Link></li>
                    <li className='hover:bg-white  px-2  mb-2'><Link to={''}>E_Delivery</Link></li>
                    <li className='hover:bg-white  px-2'><Link to={''}>E_Procedure</Link></li>
                  </ul> 
              </div>
              <Link to="/" className='hover:border-b-2 border-bg-color'>
                CONTACT
              </Link>
            
            </li>
          </ul>
          </div>
          <div>
              <button className='md:block hidden btn-primary'>Login</button>
              
            </div>
            
            {
              showMobileNav ? (
                <span>
                    <X size={20} onClick={()=> SetShowMobileNav(false)}  className='cursor-pointer md:hidden'/>
                </span>
                
                ):
                <div className='Cursor-pointer px-10 md:hidden'>   
                <List size={20} onClick={()=> SetShowMobileNav(true)} className='cursor-pointer fixed'/>
                </div>
                
            }
           
          </div>
      </div>  
    </nav> 
    </>
    
  )
}

export default Navbar