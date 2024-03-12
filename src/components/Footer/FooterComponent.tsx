import { Link } from "react-router-dom"

import logo from '../../assets/img/eConiaSoft-Final2.png'
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"
const FooterComponent = () => {
  return (
     <>
     <div className="relative w-full text-white bg-bg-color">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-10 gap-20">
          <div className="flex flex-col">
            <Link to='#'>
              <img src={logo} alt=""  />
              <p>Lorem, ipsum dolor sit amet consectetur adi</p>
            </Link>

          </div>
          <div className="flex flex-col gap-3">
            <p className="uppercase">Quick link</p>
            <ul>
              <li className="my-2 "><Link to={""}>Home</Link></li>
              <li className="my-2 "><Link to={""}>Features</Link></li>
              <li className="my-2 "><Link to={""}>Product</Link></li>
              <li className="my-2 "><Link to={""}>Pricing</Link></li>
              <li className="my-2 "><Link to={""}>Contact</Link></li>
            </ul>

          </div>
          <div className="flex flex-col gap-3">
            <p className="uppercase">service</p>
            <ul>
              <li className="my-2 "><Link to={""}>Shared Web</Link></li>
              <li className="my-2 "><Link to={""}>Hosting</Link></li>
              <li className="my-2 "><Link to={""}>vps Hosting</Link></li>
              <li className="my-2 "><Link to={""}>Dedicated server</Link></li>
              <li className="my-2 "><Link to={""}>cloud Hosting</Link></li>
              <li className="my-2 "><Link to={""}>Domain Names</Link></li>
              <li className="my-2"><Link to={""}>License</Link></li>

            </ul>

          </div>
          <div className="flex flex-col gap-3">
            <p className="uppercase">Conatct</p>
            <ul>
              <li className="my-2"><Link to={""}>Support@E_ConiaSoft.com</Link></li>
              <li className="my-2"><Link to={""}>+234567890</Link></li>
              <li className="my-2"><Link to={""}>Follow us</Link></li>
             <div className="flex justify-start items-center gap-3">
              <Link to={""}><FacebookLogo size={32} /></Link>
              <Link to={""}><TwitterLogo size={32} /></Link>
              <Link to={""}><LinkedinLogo size={32} /></Link>

             </div>
            </ul>

          </div>

        </div>

      </div>

     </div>
     
     </>
  )
}

export default FooterComponent