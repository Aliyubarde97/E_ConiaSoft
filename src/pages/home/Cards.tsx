import card1 from '../../assets/img/card1.svg'
import card2 from '../../assets/img/card2.svg'
import card3 from '../../assets/img/card3.svg'
import card4 from '../../assets/img/card4.svg'

const Cards = () => {
    return (
        <>
            <div className="w-full min-h-[70vh] bg-bg-color">
                <div className="flex items-center justify-center">
                    <p className="font-bold capitalize text-3xl mt-10 text-white">Our Features</p>
                </div>
                <div className="container grid lg:grid-cols-4 md:grid-2  gap-12 lg:gap-8  sm:px-6  lg:px-4 mt-10">
                    {/* card-1 */}
                    <div className=" bg-white mb-10 border  border-color-white text-center py-10 px-6 
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
                        <div
                            className="bg-color-secondry inline-block rounded-2xl py-4 px-3  w-20 "
                        >
                            <img src={card1} alt="" />
                        </div>
                        <h3 className="text-xl font-bold py-4 text-text-colorblue">E-Invoice</h3>
                        <p className="leading-relaxed">
                            Streamlined Invoicing Made Easy
                        </p>

                    </div>
                    {/* card2 */}
                    <div className=" bg-white mb-10 border  border-color-white text-center py-10 px-6
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
                        <div
                            className="bg-color-secondry inline-block rounded-2xl py-4 px-3  w-20"
                        >
                            <img src={card2} alt="" />
                        </div>
                        <h3 className="text-xl font-bold py-4  text-text-colorblue"> E-Archive Invoice </h3>
                        <p className="leading-relaxed">
                            Expand Your Reach with Digital Invoices
                        </p>

                    </div>
                    {/* card 2 */}
                    <div className=" bg-white mb-10 border  border-color-white text-center py-10 px-6
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
                        <div
                            className="bg-color-secondry inline-block rounded-2xl py-4 px-3  w-20 "
                        >
                            <img src={card3} alt="" />
                        </div>
                        <h3 className="text-xl font-bold py-4  text-text-colorblue">E-Delivery Note</h3>
                        <p className="leading-relaxed">
                            Revolutionize Your Logistics
                        </p>

                    </div>
                    {/* card 4 */}
                    <div className=" bg-white mb-10 border  border-color-white text-center py-10 px-6 
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
                        <div
                            className="bg-color-secondry inline-block rounded-2xl py-4 px-3  w-20"
                        >
                            <img src={card4} alt="" />
                        </div>
                        <h3 className="text-xl font-bold py-4  text-text-colorblue ">E-Producer </h3>
                        <p className="leading-relaxed">
                            Tailored Solutions for Agricultural Transactions
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards