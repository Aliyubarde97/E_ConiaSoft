import hero from '../../assets/img/background.png'
const HomeSection = () => {
  return (
    
    <>
            <div className="w-full h-[calc(100vh-140px)] bg-hero-color">
                <div className="container">
                    <div className="flex flex-col items-center justify-center md:flex-row">
                        <div className="w-full md:w-[60%]">
                            <p className="">
                                <h3 className=' capitalize leading-74 font-bold text-black text-4xl '>Effortless Electronic Invoicing for Modern Businesses</h3>
                                <h3 className=' capitalize  mt-5 mb-10 md:md:w-[100%] md:pr-10'>
                                    Say goodbye to paper invoices and hello to a
                                    smarter, more efficient way of managing your invoicing process. E_ConaiSoft brings you a suite of electronic
                                    invoicing solutions designed to save you time, money, and resources.
                                </h3>
                                <h5 className=" capitalize btn-primary w-fit mt-5 mb-5">Get Started</h5>
                            </p>
                        </div>

                        <div className="w-full md:w-[40%]" >
                            <img src={hero} alt="" className= ''/>
                        </div>
                    </div>
                </div>
            </div>
            </>

  )
}

export default HomeSection