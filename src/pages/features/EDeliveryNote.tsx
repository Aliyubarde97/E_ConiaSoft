import img from '../../assets/img/wepik-export-20231221134236SIcc.png'
const EDeliveryNote = () => {
    return (
        <>
            <div className="container min-h-[70vh]">
                <div className="full flex flex-col md:flex-row justify-between  items-center ">
                    <div className='w-full md:[60%] mt-10 mb-5'>
                        <p className='font-bold text-3xl'>E-Delivery Note</p>
                        <h5 className='leading-67 text-lg'>
                            Experience the future of logistics with E-Delivery Note. Prepare and transmit delivery notes electronically in real-time.
                            Enhance your operations with integrated barcode generation for efficient checks.

                            Seamless Integration and Monitoring
                            Integrate E-Delivery Note with regulatory systems for streamlined operations.
                            Monitor goods movements seamlessly, and access past delivery notes at your fingertips. Make logistics a breeze with our advanced features.
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

export default EDeliveryNote