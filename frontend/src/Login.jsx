import { useState } from 'react';

const Login = () => {
    const [PasswordVisibility, setPasswordVisibility] = useState(false);

    function changePasswordVisibility() {
        const password = document.getElementById("userPassword");
        if (password.type === "password") {
            password.type = "text";
            setPasswordVisibility(true);
        } else {
            password.type = "password";
            setPasswordVisibility(false);
        }
    }
    // I will add backend later so it will check if user exists in database and if password is correct
    // If user exists and password is correct it will send email to verify user  

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-[#111827] h-screen">
            <div id="container" className="flex flex-col justify-center items-center bg-[#1f2937] h-1/2 w-3/4 xl:w-1/2 2xl:w-5/12 rounded-3xl relative">
                <div id="logo" className="hidden mobileL:flex items-center gap-2 mb-6 absolute top-0 left-0 m-4 ">
                    <img
                        className="w-6"
                        src="./src/assets/logo.png"
                        alt="Logo icon"
                    />
                    <h1 className="text-white font-Overpass font-bold text-xl pt-1">Savely</h1>
                </div>
                <h1 className="text-white font-Overpass font-bold text-5xl">Login</h1>
                <div className="flex flex-col gap-4 w-10/12 pt-4">
                    <input className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" type="email" name="userEmail" id="userEmail" placeholder="Enter your email" />
                    <div className="relative w-full">
                        <input className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" type="password" name="userPassword" id="userPassword" placeholder="Enter your password" />
                        <img id="isPasswordVisible" onClick={changePasswordVisibility} className="w-5 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" alt={PasswordVisibility ? "Hide password" : "Show password"} src={PasswordVisibility ? "./src/assets/show.png" : "./src/assets/hide.png"}/>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <button className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-1/3 h-10 rounded-lg border-2 border-[#727eeb] bg-[#727eeb] hover:bg-transparent transition-all duration-300">Login to your account</button>
                        <button className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-1/3 h-10 rounded-lg bg-transparent border-2 border-[#727eeb] hover:bg-[#727eeb] transition-all duration-300">Forgot password?</button>
                    </div>
                </div>
                <div className='flex items-center gap-2 absolute bottom-0 m-4'>
                    <p className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-white'>New here? Create your account</p>
                    <a className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-[#5c90f2]' href="/singup">here</a>
                </div>
            </div >
        </div>
    );
};

export default Login;
