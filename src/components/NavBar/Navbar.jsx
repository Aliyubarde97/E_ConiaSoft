import { useState } from 'react'
import logo from '../../assets/img/Conia_soft_-_CLOUD-icon-removebg-preview (1) 1.svg'
import { Link} from 'react-router-dom' 
import Navbarlinks from './Navbarlinks'
import { FaBars, FaXmark } from "react-icons/fa6";






const Navbar = () => {
  const [open, setOpen] = useState(false)
 

  return (
   <section>
    <nav className='bg-bg-white'>
      <div className='flex items-center font-medium justify-around'>
          <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
            <img src={logo} alt="" className='md:cursor-pointer h-9'/>
            <div className='text-3xl cursor-pointer px-10 md:hidden' onClick={() =>setOpen(!open)}>
            <Ion-icon name={`${open ? 'close' : 'menu' }`}></Ion-icon>
            
            {/* <FaBars name={`${open ?  <FaXmark/> :  <FaBars/> }`}/> */}

           
            
            

            </div>
          </div>
          <ul className='md:flex hidden uppercase items-center gap-8 font-[poppins]'>
            <li>
              <Link to="/" className='py-7 px-3 inline-block'>
                Home
              </Link>
            </li>
            <Navbarlinks/>
           
          </ul>
          <div>
              <button className='md:block hidden btn-primary'>Login</button>
            </div>
            {/* mobile device */}
         <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 cursor-pointer
         pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
         <li>
              <Link to="/" className='py-7 px-3 inline-block'>
                Home
              </Link>
            </li>
            <Navbarlinks/>
            <div>
              
              <button className='btn-primary'>Login</button>
            </div>
         </ul>
      </div>
    </nav> 
   </section>
    
  )
}

export default Navbar