import s4 from '../../assets/img/s4.svg'
import s2 from '../../assets/img/s2.svg'
import s3 from '../../assets/img/s3.svg'


const Services = () => {
  return (
    <>
      <div className="w-full h[calc[100vh-140px]] bg-white">
        <div className="flex items-center justify-center">
          <p className="font-bold capitalize text-3xl mt-10 text-text-colorblue">Why you Choice us</p>
        </div>
        <div className="container grid lg:grid-cols-4 md:grid-2  gap-12 lg:gap-8  sm:px-6  lg:px-4 mt-10">
          {/* card-1 */}
          <div className=" bg-white mb-10 text-center py-10 px-6 
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
            <div
              className="bg-color-secondry inline-block rounded-2xl py-4 px-3  w-20 "
            >
              <img src={s4} alt="" />
            </div>
            <h3 className="text-xl font-bold py-4 text-text-colorblue">Intuitive Interface</h3>
            <p className="leading-relaxed">
            Our user-friendly design ensures a seamless experience for all users.
            </p>

          </div>
          {/* card2 */}
          <div className=" bg-white mb-10  text-center py-10 px-6
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
            <div
              className="bg-color-secondry inline-block rounded-2xl py-4 px-3  w-20"
            >
              <img src={s2} alt="" />
            </div>
            <h3 className="text-xl font-bold py-4  text-text-colorblue">Security & Compliance</h3>
            <p className="leading-relaxed">
            Trust in the highest standards of security and regulatory compliance.
            </p>

          </div>
          {/* card 3  */}
          <div className=" bg-white mb-10 b   text-center py-10 px-6
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
            <div
              className=" inline-block rounded-2xl py-4 px-3  w-20 "
            >
              <img src={s3} alt="" />
            </div>
            <h3 className="text-xl font-bold py-4  text-text-colorblue">Real-Time Visibility</h3>
            <p className="leading-relaxed">
            Monitor your business operations in real-time for better decision-making.
            </p>

          </div>
          <div className=" bg-white mb-10 b   text-center py-10 px-6
              cursor-pointer hover:bg-color-primary-dark  ease-in ">
            <div
              className=" inline-block rounded-2xl py-4 px-3  w-20 "
            >
              <img src={s3} alt="" />
            </div>
            <h3 className="text-xl font-bold py-4  text-text-colorblue">Cost-Efficiency</h3>
            <p className="leading-relaxed">
            Reduce operational costs and contribute to a sustainable business environment.
            </p>

          </div>


        </div>


      </div>
    </>
  )
}

export default Services