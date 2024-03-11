const Contactus = () => {
    return (
        <>
             <div className="container  mx-auto mb-30">
        <div className="flex justify-center min-h-[300px] bg-gradient-to-r from-blue-900 to-cyan-700">
        <div className="w-full  min-h-[300px] bg-gradient-to-r from-blue-900 to-cyan-700">
      <div className="text-white">
      <div className="">
        <p className="text-5xl font-bold text-center px-12 py-12">
          Get In Touch
        </p>
      </div>
     
      </div>

    </div>
        </div>
        <div className="px-4 py-8 sm:w-2/3 lg:.w-1/2 mx-auto">
          <div className="rounded-lg shadow-lg -mt-20 bg-white py-10 md:py-12 px-4 md:px-6">
            {/* <!-- component --> */}
            <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input className="appearance-none r block w-full bg-grey-lighter  text-grey-darker border border-red  py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
                  </input><p className="text-red text-xs italic">Please fill out this field.</p>
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
                  </input></div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                    Password
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************">
                  </input><p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
                    City
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque">
                  </input></div>
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                    State
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                      <option>Nigeria</option>
                      <option>Turkey</option>
                      <option>Germany</option>
                    </select>
                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
                    Zip
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210">
                  </input> </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        </>
    )
}

export default Contactus