import { Link } from "react-router-dom"
import support from "../../assets/img/eConiaSoft Mascot-En.png"
import logo from '../../assets/img/eConiaSoft-Final2.png'
import footer1 from '../../assets/img/Footer1.png'
import footer2 from '../../assets/img/Footer2.png'
import footer3 from '../../assets/img/Footer3.png'
import footer4 from '../../assets/img/Footer4.png'
import footer5 from '../../assets/img/Footer5.jpg'




import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "phosphor-react"
const FooterComponent = () => {
  return (
     <>
     <div className="relative w-full text-white bg-bg-color">
      <div className="container">

        {/* logo stuff */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 border-b pb-4 p-5 gap-20">
          {/* first logos */}
        <div className="flex justify-start items-center gap-2">
        <div className='inline-block'>
            <Link to={'#'}>
            <img src={support} alt="" className='md:cursor-pointer  h-[76px]'/>
            </Link>
            </div>

            <div className='inline-block'>
            <Link to={'#'}>
            <img src={logo} alt="" className='md:cursor-pointer  h-[76px]'/>
            </Link>
            </div>
          </div>

          {/* second logos */}
          <div className="grid lg:grid-cols-5 md:flex-wrap grid-cols-1">
          <div className='inline-block'>
            <Link to={'#'}>
            <img src={footer1} alt="" className='md:cursor-pointer  h-[76px] '/>
            </Link>
            </div>
            <div className='inline-block'>
            <Link to={'#'}>
            <img src={footer2} alt="" className='md:cursor-pointer  h-[76px] '/>
            </Link>
            </div>
            <div className='inline-block'>
            <Link to={'#'}>
            <img src={footer3} alt="" className='md:cursor-pointer  h-[76px] '/>
            </Link>
            </div>
            <div className='inline-block'>
            <Link to={'#'}>
            <img src={footer4} alt="" className='md:cursor-pointer  h-[76px] '/>
            </Link>
            </div>
            <div className='inline-block'>
            <Link to={'#'}>
            <img src={footer5} alt="" className='md:cursor-pointer h-[76px] '/>
            </Link>
            </div>
          </div>

          </div>

      
          
            

          
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10 gap-15">
        <div className="flex flex-col">
            <p className="capitalize">ConiaSoft Software Suite is a comprehensive suite of tools.</p>
            <h4 className="my-5">CONIASOFT SOFTWARE TECHNOLOGIES LTD.</h4>
            <h5 >Üniversite Mahallesi İpekyolu Caddesi Teknoloji Geliştirme Bölgesi</h5>
            <p className="py-2 text-[#FFA500]">Phone:<span className="text-white px-3">+1234567890</span></p>
            <p className="py-3  text-[#FFA500]">Whatsapp:<span className="text-white px-3">+987654321</span></p>
            <p className="py-3  text-[#FFA500]">Email:<span className="text-white px-3">eConaisoft.com</span></p>
            <div className="flex justify-start items-center my-5 gap-3">
              <Link className="bg-[#FFA500] text-white rounded-md" to={""}><FacebookLogo size={23}  /></Link>
              <Link  className='bg-[#FFA500] text-white rounded-md' to={""}><TwitterLogo size={23}  /></Link>
              <Link className="bg-[#FFA500] text-white rounded-md" to={""}><LinkedinLogo size={23}  /></Link>
              <Link  className='bg-[rgb(255,166,0)] text-white rounded-md' to="#"><InstagramLogo size={23} /></Link>
              <Link  className='bg-[rgb(255,166,0)] text-white rounded-md' to="#"><YoutubeLogo size={23}/></Link>
             </div>

          </div>
          
          <div className="flex flex-col ">
            <p className="uppercase">service</p>
            <ul>
              <li className="my-5"><Link to={""}>Shared Web</Link></li>
              <li className="my-5"><Link to={""}>Hosting</Link></li>
              <li className="my-5"><Link to={""}>vps Hosting</Link></li>
              <li className="my-5"><Link to={""}>Dedicated server</Link></li>
              <li className="my-5"><Link to={""}>cloud Hosting</Link></li>
              <li className="my-5"><Link to={""}>Domain Names</Link></li>
              <li className="my-5"><Link to={""}>License</Link></li>

            </ul>

          </div>
          <div className="flex flex-col">
            <p className="uppercase">Conatct</p>
            <ul>
              <li className="my-5"><Link to={""}>Support@E_ConiaSoft.com</Link></li>
              <li className="my-5"><Link to={""}>+234567890</Link></li>
              <li className="my-5"><Link to={""}>Follow us</Link></li>
             
            </ul>

          </div>

        </div>

      </div>
      </div>
     
     </>
  )
}

export default FooterComponent
