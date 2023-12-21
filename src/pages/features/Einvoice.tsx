import img from '../../assets/img/26765739_2109.i607.018.S.m012.c12.fintech_isometric_icons-removebg-preview.png'
const FileStorage = () => {
    return (
        <>
            <div className="container min-h-[70vh]">
                <div className="full flex flex-col md:flex-row justify-between  items-center ">
                    <div className='w-full md:[60%] mt-10 mb-5'>
                        <p className='font-bold text-3xl'>E-Invoice</p>
                        <h5 className='leading-67 text-lg'>
                            Generate Electronic Invoices in Seconds.
                            Say goodbye to manual invoicing. With E_Coniasoft, creating invoices is as easy as a few clicks.
                            Our intuitive interface allows you to generate professional and legally valid electronic invoices in seconds.

                            Secure Transmission and Monitoring
                            Ensure the secure transmission of your invoices to clients. Track the status of your invoices in real-time,
                            from sent to viewed and paid. Rest easy knowing that your invoicing process is efficient and secure.
                        </h5><br />
                        <button className='btn-primary'>Learn More</button>
                        </div>


                        <div className="w-full md:[40%] mt-10">
                            <img src={img} alt="" className='cover' />

                       

                    </div>
                </div>
            </div>
        </>
    )
}

export default FileStorage