import { useState, useRef } from 'react';

const Singup = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    function changePasswordVisibility() {
      if (passwordRef.current.type === "password") {
        passwordRef.current.type = "text";
        setPasswordVisibility(true);
      } else {
        passwordRef.current.type = "password";
        setPasswordVisibility(false);
      }
    }

    function changeConfirmPasswordVisibility() {
      if (passwordConfirmRef.current.type === "password") {
        passwordConfirmRef.current.type = "text";
        setConfirmPasswordVisibility(true);
      } else {
        passwordConfirmRef.current.type = "password";
        setConfirmPasswordVisibility(false);
      }
    }

    function checkPasswords() {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        alert("Passwords don't match");
      } else {
        alert("Passwords match");
        // Ill do backend later so it will add user to database and this alert will be deleted or replaced with redirect to login page
      }
    }

    function validatePassword() {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s])[A-Za-z\d\S]{8,}$/;
      if (regex.test(passwordRef.current.value)) {
        checkPasswords();
      } else {
        alert("Password must contain at least 8 characters, one letter, one number, and one special character");
      }
    }    

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
                <h1 className="text-white font-Overpass font-bold text-5xl">Singup</h1>
                <div className="flex flex-col gap-4 w-10/12 pt-16">
                    <input className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" type="email" name="userEmail" id="userEmail" placeholder="Enter your email" />
                    <div className="relative w-full">
                        <input ref={passwordRef} className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" type="password" name="userPassword" id="userPassword" placeholder="Enter your password" />
                        <img id="isPasswordVisible" onClick={changePasswordVisibility} className="w-5 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" alt={passwordVisibility ? "Hide password" : "Show password"} src={passwordVisibility ? "./src/assets/show.png" : "./src/assets/hide.png"}/>
                    </div>
                    <div className="relative w-full">
                        <input ref={passwordConfirmRef} className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Enter your password" />
                        <img id="isPasswordVisible" onClick={changeConfirmPasswordVisibility} className="w-5 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" alt={confirmPasswordVisibility ? "Hide password" : "Show password"} src={confirmPasswordVisibility ? "./src/assets/show.png" : "./src/assets/hide.png"}/>
                    </div>
                        <button className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-full h-10 rounded-lg border-2 border-[#727eeb] bg-[#727eeb] hover:bg-transparent transition-all duration-300" onClick={() => {validatePassword()}}>Create your account</button>
                </div>
                <div className='flex items-center gap-2 absolute bottom-0 m-4'>
                    <p className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-white'>Have already account? Login</p>
                    <a className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-[#5c90f2]' href="/login">here</a>
                </div>
            </div >
        </div>
    );
};

export default Singup;