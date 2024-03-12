const Process = () => {
    return (
        <>
            <div className="container min-h-[600px]">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full md:[60%] mt-10 mb-5">
                        <div className="container bg-gradient-to-b from-blue-900 to-cyan-700  w-[400px] min-h-[600px] justify-between rounded mt-10">
                            <h1 className="w-[350px] h-[250px]">
                            <p className=" container w-[400]  text-white py-12 px-10 text-3xl">  Our Working
                                Process - How
                                We Work For Our
                                Customers</p>
                                <h4 className="container px-10 text-lg text-white">We currently support PDF, Png, Pictures. More to come.</h4>
                                </h1><br /><br />
                                <button className="ml-10 px-8 py-2 rounded-full cursor-pointer focus:ease-out bg-white text-black md:hover:bg-bg-color ">Get Started</button>
                        </div>
                    </div>
                    <div className="w-full md:[50%] mt-10">
                        <div className="w-full flex flex-col-2 mt-10 items-center justify-between "  >
                            <div className="w-[300px] h-[200px]">
                                <p className="w-[60px] h-[55px] font-bold text-2xl rounded-xl ">01</p>
                                <h4 className="font-bold">
                                    Sign Up and Onboarding
                                </h4>
                                <h5 className="">Begin your journey by signing up for a free trial. Our onboarding process is designed to get you up and running quickly,
                                    with step-by-step guidance to familiarize you with E_ConaiSoft.</h5>
                            </div>
                            <div className="w-[300px] h-[200px]">
                                <p className="w-[60px] h-[55px] font-bold text-2xl text-orange-500 rounded ">02</p>
                                <h4 className="font-bold">
                                    Customize Your Settings
                                </h4>
                                <h5 className="">Tailor E_ConaiSoft to fit your business needs. Customize settings, templates, and preferences to align with your invoicing workflow seamlessly..</h5>
                            </div>

                        </div>
                        <div className="w-full flex flex-col-2 md:flex-row items-center justify-between ">
                            <div className="w-[300px] h-[200px]">
                                <p className="w-[60px] h-[55px] font-bold text-2xl ">03</p>
                                <h4 className="font-bold">
                                    Create and Send Your First Invoice
                                </h4>
                                <h5 className="">Be Use our intuitive interface to create your first electronic invoice. Add line items, set tax rates, and include any discounts. Once ready, send it securely to your clients with just a few clicks.</h5>
                            </div>
                            <div className="w-[300px] h-[200px]">
                                <p className="w-[60px] h-[55px] font-bold text-2xl ">04</p>
                                <h4 className="font-bold">
                                    Explore Advanced Features
                                </h4>
                                <h5 className="">Unlock the full potential of E_ConaiSoft by exploring advanced features such as recurring invoices, detailed analytics, and integrations with popular accounting software..</h5>
                            </div>

                        </div>
                        <div className="w-[300px] h-[200px] mt-10">
                            <p className="w-[60px] h-[55px] font-bold text-2xl ">05</p>
                            <h4 className="font-bold">
                                Monitor and Optimize
                            </h4>
                            <h5 className="">Keep a close eye on your invoicing operations in real-time. Monitor the status of invoices, track payments,
                                and use our analytics tools to optimize your invoicing strategy.</h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Process