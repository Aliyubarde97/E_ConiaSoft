
const Contactus = () => {
    return (
        <>
            <div className='w-full min-h-[900px] bg-white border-x-fuchsia-100'>
                <div className="container absolute  top-[350px] left-0 right-0 h-[750px] bg-white shadow-2xl rounded-2xl w-[900px] mx-auto md:min-w-[300px] lg">
                        {/* <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto"> */}
                            {/* <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6"> */}
                    <form action="" id="" className="py-12 px-10 md:flex flex-wrap">
                        <div className="w-full flex flex-col-2 md: flex-wrap  py-10 px-12 ">
                            <div className="px-12">
                                <label htmlFor="" id="First Name">First Name <span>*</span></label><br />
                                <input type="text" id="First_Name" placeholder="musa wakili" className="w-[300px] h-[40px] border border-gray-200 rounded-lg "  />
                            </div>
                            <div>
                                <label htmlFor="" id="First Name">Your Email<span>*</span></label><br />
                                <input type="text" id="Email" placeholder="example@gmail.com" className="w-[300px] h-[40px]  border border-gray-200 rounded-lg" />

                            </div>
                        </div>
                        <div className="w-full flex flex-col-2 md:flex-row py-10 px-12">
                            <div className="px-12">
                                <label htmlFor="" id="First Name">Company <span>*</span></label><br />
                                <input type="text" id="Company" placeholder="you company name" className="w-[300px] h-[40px] border border-gray-200 rounded-lg "/>
                            </div>
                            <div>
                                <label htmlFor=""  id="First Name">Subject<span>*</span></label><br />
                                <input type="text" placeholder="how can your help" id="Subject" className="w-[300px] h-[40px] border border-gray-200 rounded-lg" />

                            </div>
                        </div>

                        <div className="w-full  py-10 px-12 ml-12"> 
                        <label htmlFor="">Message</label><br />
                            <textarea name="" id="Message" placeholder="Hello there,I would like to talk about how to..." className="w-[650px] h-[200px]  border border-gray-200 rounded-lg">
                            </textarea>
                        </div>
                        

                        <div><br />
                        <div className=" absolute left-[605px]">
        
                            <button className="btn-primary capitalize " id="Send Message ">Send Message</button>
                        </div>
                        </div>
                    </form>
                    

                </div>
            </div>
        </>
    )
}

export default Contactus