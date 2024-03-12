const Pricing = () => {

  const Price = [
    {PlanName:'Basic',
     PlanPrice:'$1000/Month',
     bundle: ["bundle 1", "bundle 2", "bundle 3", "bundle 4"] 
    },

    {PlanName:'PRO',
     PlanPrice:'$2000/Month',
     bundle: ["bundle 1", "bundle 2", "bundle 3", "bundle 4"] 
    },

    {PlanName:'PREMIUM',
     PlanPrice:'$3000/Month',
     bundle: ["bundle 1", "bundle 2", "bundle 3", "bundle 4"] 
    },

    {PlanName:'SUPER',
     PlanPrice:'$4000/Month',
     bundle: ["bundle 1", "bundle 2", "bundle 3", "bundle 4"]
    },
  ]
  return (
   <>
   <div className="w-full  min-h-[70vh] bg-section-color">
    <div className="container">
    <div className="flex items-center justify-center">

    <p className="font-bold capitalize text-3xl py-5 text-white">Our Pricing</p>
    </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-12 lg:gap-8 sm:px-6 py-10">
        
          {
            Price.map((items, index) => 
              <div key={index} className='w-full md:max-w-[300px] bg-white shadow-md min-h-[200px] p-6 
               hover:bg-color-primary-dark ease-in relative'>
                <p className="text-center font-bold text-xl mb-1">{items.PlanName}</p>
                <p className="text-center font-bold text-sm mb-2">{items.PlanPrice}</p>
                
                <ul className="w-full list-disc list-inside">
                  {items.bundle.map(item => (
                    <li key={item} className="text-xs mb-2">{item}</li>
                  ))}
                </ul>

                <div className="w-full text-center mt-10">
                  <button className="bg-btn-primary text-white text-sm px-4 py-2 rounded-md cursor-pointer focus:ease-out uppercase whitespace-nowrap">choose plan</button>
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
