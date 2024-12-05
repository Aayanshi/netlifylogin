// Login
const Login=()=>{
    return(
        <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create A Free Account
            <p className="text-sm p-3 text-black-200">
              To Acess Sync Space Home
            </p>  
            </h2>
            <form>
                <div>
                    <input type="text" placeholder="Email Address or mobile number" className="bg-slate-100 text-sm p-4  w-full" />
                </div>
                <div className="mt-2">
                    <input type="text" placeholder="Password" className="bg-slate-100 text-sm p-4  w-full" />
                </div>
                <span className="text-cyan-500 text-[12px]">Forgot password?</span>
                <div>
                    <button className="bg-[#1AB6CF] text-white w-full p-4">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;