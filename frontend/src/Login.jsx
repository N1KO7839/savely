import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useAuthStore } from './store/authStore'

const Login = () => {
    const [PasswordVisibility, setPasswordVisibility] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const { error,login } = useAuthStore();

    const handleLogin = async(e) => {
        e.preventDefault();
        await login(email, password);
        
        const { user } = useAuthStore.getState();
        if (user?.verified) {
            navigate('/');
        }
        
    }
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

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-[#111827] h-screen">
            <div id="container" className="flex flex-col justify-center items-center bg-[#1f2937] h-2/3 w-5/6 xl:w-1/2 2xl:w-5/12 rounded-3xl relative">
                <div id="logo" className="hidden mobileL:flex items-center gap-2 mb-6 absolute top-0 left-0 m-4">
                    <img
                        className="w-9"
                        src="./src/assets/logo.png"
                        alt="Logo icon"
                    />
                    <h1 className="text-white font-Overpass font-bold text-3xl pt-1">Savely</h1>
                </div>
                <h1 className="text-white font-Overpass font-bold text-5xl pb-8">Login</h1>
                <form className='flex flex-col gap-5 w-10/12 pt-4' onSubmit={handleLogin}>
                    <input className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="userEmail" id="userEmail" placeholder="Enter your email" />
                    <div className="relative w-full">
                        <input className="text-white text-center w-full bg-white/0 border border-[#777F8B] py-1.5 rounded-xl" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="userPassword" id="userPassword" placeholder="Enter your password" />
                        <img id="isPasswordVisible" onClick={changePasswordVisibility} className="w-5 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" alt={PasswordVisibility ? "Hide password" : "Show password"} src={PasswordVisibility ? "./src/assets/show.png" : "./src/assets/hide.png"}/>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <button  className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-1/2 h-10 rounded-lg border-2 border-[#727eeb] bg-[#727eeb] hover:bg-transparent transition-all duration-300" type='submit'>Login to your account</button>
                        <button className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-1/2 h-10 rounded-lg bg-transparent border-2 border-[#727eeb] hover:bg-[#727eeb] transition-all duration-300"><Link to={"/"} className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-[#5c90f2]'>Forgot password?</Link></button>
                    </div>
                    </form>
                    {error && <p className="text-red-600/90 text-center pb-2">{error}</p>}
                <div className='flex items-center gap-2 absolute bottom-2 m-4'>
                    <p className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-white'>New here? Create account</p>
                    <Link to={"/singup"} className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-[#5c90f2]'>
                        here
                    </Link>
                </div>
            </div >
        </div>
    );
};


export default Login;
