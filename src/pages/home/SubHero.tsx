import section from '../../assets/img/Image_3_ImgID1-removebg-preview.png'
import icon from '../../assets/img/Icon.svg'
const SubHero = () => {
    return (
        <>
            <div className="w-full h-[(100vh-140px)] bg-section-color mt-20">
                <div className='container'>
                <div className="flex flex-col  md:flex-row">
                    <div className='w-full md:w-[60%] mt-10 mb-5'>
                        <img src={section} alt="" />
                    </div>
                    <div className='w-full md:w-[40%] mt-10'>
                        <h3 className=' capitalize leading-74 font-bold text-text-colorblue text-3xl '>All your Files and documents in one place</h3>
                        <h3 className=' capitalize text-1xl  mt-5 mb-10 md:md:w-[100%] md:pr-10'>
                            Building an enterprise level site doesn't need nightmare or cost your thousands. E_ConaiSoft is purposely
                            built for ease of use and completxability to create even the most powerful of products.
                        </h3>
                        <div className='flex flex-col-1 gap-7 mb-8 mt-2'>
                            <div className='w-50'>
                                <img src={icon} alt="" />
                            </div>
                            <div className=''>
                                <p className='font-bold text-3xl'>E_ConaiSoft</p>
                                <h5 className='leading-30'>Building  and storing an invoices  doesn't need  your thousands.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default SubHero