import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore.js";

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  //errors
  const [passwordValid, setPasswordValid] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");

  const navigate = useNavigate();

const { signup, error} = useAuthStore();

  const changePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);
  const changeConfirmPasswordVisibility = () => setConfirmPasswordVisibility(!confirmPasswordVisibility);

  const validatePassword = async (e) => {
    e.preventDefault();
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s])[A-Za-z\d\S]{8,}$/;
    
    // validate password
    if (!regex.test(password)) {
      setPasswordValid("Password needs 8+ chars, letter, number, symbol");
      return;
    }
    setPasswordValid("");

    // check if passwords are maching
    if (password !== confirmPassword) {
      setPasswordMatch("Passwords do not match");
      return;
    }
    setPasswordMatch("");
  
    // if password is valid, signup
    await signup(email, password);
  
    const { user } = useAuthStore.getState();
  
    if (user) {
      navigate("/verify-code");
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#111827] h-screen">
      <div className="flex flex-col justify-center items-center bg-[#1f2937] h-3/4 w-5/6 xl:w-1/2 2xl:w-5/12 rounded-3xl relative">
        <div className="hidden mobileL:flex items-center gap-2 mb-6 absolute top-0 left-0 m-4">
          <img className="w-9" src="../src/assets/logo.png" alt="Logo icon" />
          <h1 className="text-white font-Overpass font-bold text-2xl pt-1">Savely</h1>
        </div>
        <h1 className="text-white font-Overpass font-bold text-6xl pt-10">Signup</h1>
        <form className="flex flex-col gap-6 w-10/12 pt-6" onSubmit={validatePassword}>
          <input
            className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl"
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full">
            <input
              className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl"
              type={passwordVisibility ? "text" : "password"}
              name="userPassword"
              id="userPassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              onClick={changePasswordVisibility}
              className="w-5 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              alt={passwordVisibility ? "Hide password" : "Show password"}
              src={passwordVisibility ? "../src/assets/show.png" : "../src/assets/hide.png"}
            />
          </div>
          <div className="relative w-full">
            <input
              className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl"
              type={confirmPasswordVisibility ? "text" : "password"}
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              onClick={changeConfirmPasswordVisibility}
              className="w-5 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              alt={confirmPasswordVisibility ? "Hide password" : "Show password"}
              src={confirmPasswordVisibility ? "../src/assets/show.png" : "../src/assets/hide.png"}
            />
          </div>
          <button
            className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-full h-10 rounded-lg border-2 border-[#727eeb] bg-[#727eeb] hover:bg-transparent transition-all duration-300"
            type="submit">
            Create your account
          </button>
        </form>
        {(passwordMatch.length > 0 || passwordValid.length > 0 || error) && <p className=" text-red-500 text-xs mobileL:text-sm sm:text-base md:text-lg pt-4" id="error">{passwordMatch || passwordValid || error}</p>}
        <div className="flex items-center gap-2 absolute bottom-0.5 m-4">
          <p className="font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-white">Have account? Login</p>
          <Link to="/login" className="font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-[#5c90f2]">here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
