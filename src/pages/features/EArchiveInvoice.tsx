import img from '../../assets/img/wepik-export-20231221125453Oluj.png'

const EArchiveInvoice = () => {
  return (
    <>
      <div className="container min-h-[70vh]">
        <div className="w-full flex flex-col md:flex-row justify-between  items-center ">
          <div className="w-full md:[40%] mt-10">
            <img src={img} alt="" className='cover' />



          </div>
          <div className='w-full md:[60%] mt-10 mb-5'>
            <p className='font-bold text-3xl'>E-Archive Invoice</p>
            <h5 className='leading-67 text-lg'>
              Extend your electronic invoicing capabilities to clients who haven't adopted E-Invoice. Send digital invoices in PDF format to
              any email or SMS number, ensuring accessibility and compliance for 10 years.

              Effortless Online Access
              Retrieve and review invoices online effortlessly. Our E-Archive Invoice feature provides
              a user-friendly interface for quick access to stored digital invoices, offering a convenient and organized way to manage your records.                        </h5><br />
            <button className='btn-primary'>Learn More</button>
          </div>



        </div>
      </div>
    </>
  )
}

export default EArchiveInvoice