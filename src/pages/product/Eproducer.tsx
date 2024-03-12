import img from '../../assets/img/wepik-export-20231221131636zO7r.jpeg'

const Eproducer = () => {
    return (
        <>
            <div className="container min-h-[70vh]">
                <div className="full flex flex-col md:flex-row justify-between  items-center ">
                    <div className="w-full md:[40%] mt-10">
                        <img src={img} alt="" className='cover' />



                    </div>
                    <div className='w-full md:[60%] mt-10 mb-5'>
                        <p className='font-bold text-3xl'> E-Producer</p>
                        <h5 className='leading-67 text-lg'>
                            **Electronic Receipts with Legal Qualities**
                            Facilitate agricultural transactions with E-Producer. Generate electronic receipts with legal qualities
                            equivalent to paper producer's receipts, ensuring
                            compliance and ease of verification.

                            Revenue Administration Verification
                            Farmers can easily verify receipts through the Revenue
                            Administration website. Our system ensures a smooth
                            process for both buyers and sellers in the agricultural supply chain.
                        </h5><br />
                        <button className='btn-primary'>Learn More</button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Eproducer