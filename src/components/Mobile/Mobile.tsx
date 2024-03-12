/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

interface MobileProps{
  show:boolean;
  setClose: () => void;
}
const Mobile = ({show, setClose}:MobileProps) => {

  const HandleClose = (ev:any) => {
    const target = ev.target as HTMLDivElement;
    if(target.className.includes("Mobile")){
      return setClose()
    }
  }

  return (
    <>
    <div onClick={HandleClose}  className={`Mobile bg-white absolute top-[80px] left-0 w-[200px] shadow-md h-screen bottom-0 py-10 cursor-pointer pl-4 duration-500 ${show ? "fixed": "hidden"} z-[1000]`} >
    <ul  className="">
         
    <li className='px-3  cursor-default oy-2 inline-block'><Link to="#">Home</Link></li>
    <li className='px-3  cursor-default py-2 block'><Link to="#">Features</Link></li>
    <li className='px-3  cursor-default py-2 block'><Link to="#">Pricing</Link></li>
    <li className='px-3  cursor-default  py-2 block'><Link to="#">Contact</Link></li> 
    <div>
   <button className='btn-primary'><Link to="#">Login</Link></button>
            </div>
         </ul>
    </div>
    
    </>
  )
}

export default Mobile
