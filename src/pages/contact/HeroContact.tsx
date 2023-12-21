import message from '../../assets/img/message.svg'
import call from '../../assets/img/call.svg'
const HeroContact = () => {
  return (
    <>
    <div className="w-full  min-h-[300px] bg-gradient-to-r from-blue-900 to-cyan-700">
      <div className="text-white">
      <div className="">
        <p className="text-5xl font-bold text-center px-12 py-12">
          Get In Touch
        </p>
      </div>
     <div className="flex flex-col- px-12 py-10 gap-12 items-center justify-center">
     <div className='flex flex-col- gap-2 cursor-pointer '>
     <img src={call} alt="" /><span>contact@E_ConaiSoft</span>
     
      </div>
      <div className='flex flex-col- gap-2 cursor-pointer'>
      <img src={message} alt="" /><span>(011) 6543 8974 210</span>
      <i></i>
      </div>
     </div>
      </div>

    </div>
    </>
  )
}

export default HeroContact

