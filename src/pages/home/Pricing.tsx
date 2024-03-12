const Pricing = () => {

  const Price = [
    {PlanName:'Basic',
     PlanPrice:'$1000/Month',
     bundle: ["bundle 1", "bundle 2 "] 
    },

    {PlanName:'Basic',
     PlanPrice:'$1000/Month',
     bundle: ["bundle 1", "bundle 2 "] 
    },

    {PlanName:'Basic',
     PlanPrice:'$1000/Month',
     bundle: ["bundle 1", "bundle 2 "] 
    },

    {PlanName:'Basic',
     PlanPrice:'$1000/Month',
     bundle: ["bundle 1", "bundle 2"] 
    },
  ]
  return (
   <>
   <div className="w-full  min-h-[70vh] bg-section-color">
    <div className="container">
    <div className="flex items-center justify-center">

    <p className="font-bold capitalize text-3xl py-5 text-white">Our Pricing</p>
    </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-12 lg:gap-8 sm:px-6   mt-10">
        
          {
            Price.map((items, index) => 
              <div key={index} className='bg-white shadow-md mb-10 text-center h-[300px] py-3 px-6 
              cursor-pointer hover:bg-color-primary-dark ease-in'>
                <p className="py-2 font-bold text-2xl">{items.PlanName}</p>
                <p className="py-2 font-bold text-lg">{items.PlanPrice}</p>
                <p className="flex">{items.bundle}</p>
                <div>
                  <button type="submit">Login</button>
                </div>
                
              </div>
              
            )
          }
      </div>

      

        
    </div>

   </div>
   </>
  )
}

export default Pricing
