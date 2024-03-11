import { Link } from "react-router-dom"

import logo from '../../assets/img/eConiaSoft-Final2.png'
const FooterComponent = () => {
  return (
     <>
     <div className="relative w-full h-[300px] text-white bg-bg-color">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col">
            <Link to={""}>
              <img src={logo} alt=""  />
              <p>Lorem, ipsum dolor sit amet consectetur adi</p>
            </Link>

          </div>
          <div className="flex flex-col">
            <p className="uppercase">Quick link</p>
            <ul>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
            </ul>

          </div>
          <div className="flex flex-col">
            <p>Quick link</p>
            <ul>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
            </ul>

          </div>
          <div className="flex flex-col">
            <p>Quick link</p>
            <ul>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
              <li><Link to={""}></Link></li>
            </ul>

          </div>

        </div>

      </div>

     </div>
     
     </>
  )
}

export default FooterComponent