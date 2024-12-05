const create=()=>{
  return(
      <div className="container 
       md:containe w-full ">
        <form >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create A Free Account
            <p className="text-sm p-3 text-black-200">
              To Acess Sync Space Home
            </p>  
        </h2>

        <div className="grid gap-2 grid-cols-2">

            <input type="text" placeholder="Email Address" className="bg-slate-200 text-sm p-4  w-full" />
            <input type="text" placeholder="Website" className="bg-slate-200 text-sm px-3 w-full"/>
        </div>
        <div className="grid gap-2 grid-cols-2 mt-2">

          <input type="password" placeholder="password" className="bg-slate-200 text-sm p-4  w-full" />
          <input type="password" placeholder="Confirm password" className="bg-slate-200 text-sm p-4  w-full" />
        </div>
         <div className="flex items-center mb-4 mt-6">
            <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-2 focus:ring-text-cyan-500 mr-2" required />
              <label
                htmlFor="terms"
                className=" text-sm text-cyan-500"
              >
                I Agree To Tidio's{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                  Terms & Conditions
                </a>{' '}
                And{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                 Privacy Policy
                </a>
              </label>
          </div>
          <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-3 px-2  rounded-sm
               hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Get Started For Free
            </button>
        </form>
         
      </div>
  )
}

export default create;

