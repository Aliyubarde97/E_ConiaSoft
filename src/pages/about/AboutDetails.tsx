
import President from '../../assets/img/sir_Sakir_yavus.png'
const AboutDetails = () => {
  return (
    <>
     <div className="container min-h-[70vh]">
                <div className="full flex flex-col md:flex-row justify-between  items-center ">
                    <div className='w-full md:[60%] mt-10 mb-5'>
                        <p className='font-bold text-3xl capitalize'>who are we</p>
                        <h5 className='leading-67  inline-block  text-lg my-5 capitalize'>
                        ConiaSoft is a subsidiary of Perfect Timing Holding Software Technologies Company.
                            
                        </h5>
                        <h5 className='leading-67 text-lg inline-block my-5 capitalize'>
                        ConiaSoft has futuristic engineering marvels; It is a Turkish global Software Technologies Company consisting of German, Indian, American, African,
                         Russian and Turkish Software Developers, Designers and Engineers.
                            
                        </h5>
                        <h5 className='leading-67 text-lg inline-block my-5 capitalize'>
                        ConiaSoft has been offering, developing and producing 100% of the most perfect solutions according to the needs of its customers in all areas of future technologies such as Information Technology solutions, digital marketing and software 
                        since 2001 and is also a subsidiary of Perfect Timing Holding.
                            
                            </h5>
                        </div>


                        <div className="w-full md:[40%] mt-10">
                            <img src={President} alt="" className='cover' />

                       

                    </div>
                </div>
                <p className='my-5 capitalize'>ConiaSoft's vision and mission; The software and IT solutions designed for each user
                   are simple, sustainable, solution-oriented, dynamic and up-to-date.</p>
                   <h1 className='py-5 capitalize'>You Ask, We Do It.</h1>
            </div>
        
    </>
  )
}

export default AboutDetails
