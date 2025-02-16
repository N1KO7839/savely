import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore'
function VerifyCode() {
    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const [pastingError, setPastingError] = useState("");
    const navigate = useNavigate();    

    const {error, verifyEmail} = useAuthStore(); 
    const handleVerifyCode = async (e) => {
        e.preventDefault()
        const connectedVerificationCode = verificationCode.join("");
        await verifyEmail(connectedVerificationCode);
        const {user} = useAuthStore.getState();
        if(user){
        navigate('/login')
        }
    }

    const handleInputChange = (e, index) => {
            const value = e.target.value;
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = value;

            setVerificationCode(newVerificationCode);
            if(value.length > 1){
                newVerificationCode[index] = value[1];
                newVerificationCode[index + 1] = value[0];
                setVerificationCode(newVerificationCode);
            }
            //switching focus to next input field
            if (value !== "" && index < verificationCode.length - 1) {
            document.getElementById(`verifyCode${index + 1}`).focus();
            }
            //switching focus to previous input field
            if (value === "" && index > 0) {
            document.getElementById(`verifyCode${index-1}`).focus();
            }
    };
    //pasting verification code
    const handlePaste = (e) => {
            if (!e.clipboardData) {
            console.error("Your clipboard is not accessible");
            return;
            }
            e.preventDefault();
            const pastedData = e.clipboardData.getData("text").trim().split("");
            if (pastedData.length !== 6) {
            console.error("Your pasted code should be 6 characters long");
            setPastingError("Your pasted code should be 6 characters long")
            } else {
            setVerificationCode(pastedData);
            setPastingError("")
            document.getElementById("verifyCode5").focus();
            }
    };
    return ( 
        <div className="flex flex-col min-h-screen justify-center items-center bg-[#111827] h-screen">
            <div id="container" className="flex flex-col justify-center items-center bg-[#1f2937] h-2/3 w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-5/12 rounded-3xl relative p-4 sm:p-8">
                <div id="logo" className="hidden mobileL:flex items-center gap-2 mb-6 absolute top-0 left-0 m-4">
                    <img
                        className="w-9"
                        src="./src/assets/logo.png"
                        alt="Logo icon"
                    />
                    <h1 className="text-white font-Overpass font-bold text-3xl pt-1">Savely</h1>
                </div>
                <h1 className="text-white font-Overpass font-bold text-2xl sm:text-3xl md:text-4xl pb-3">Verify your email</h1>
                <p className="text-white/50 font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg w-10/12 text-center pb-5">We have sent a verification code to your email. Please enter the code below to verify your account.</p>
                <div className="flex flex-col gap-5 w-10/12 pt-4">
                <form onSubmit={handleVerifyCode}>
                <label htmlFor="verification code" className="flex items-center justify-center gap-2 sm:gap-4 h-1/2">
                    <input className="text-white text-xl text-center w-1/6 sm:min-h-12 lg:min-h-20 bg-white/0 border border-[#777F8B] py-4 rounded sm:rounded-xl" autoFocus maxLength={1} value={verificationCode[0]} onPaste={(e) => handlePaste(e)} onChange={(e) => handleInputChange(e, 0)} onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} type="number" name="verifyCode0" id="verifyCode0" />
                    <input className="text-white text-xl text-center w-1/6 sm:min-h-12 lg:min-h-20 bg-white/0 border border-[#777F8B] py-4 rounded sm:rounded-xl" maxLength={1} value={verificationCode[1]} onPaste={(e) => handlePaste(e)} onChange={(e) => handleInputChange(e, 1)} onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} type="number" name="verifyCode1" id="verifyCode1"/>
                    <input className="text-white text-xl text-center w-1/6 sm:min-h-12 lg:min-h-20 bg-white/0 border border-[#777F8B] py-4 rounded sm:rounded-xl" maxLength={1} value={verificationCode[2]} onPaste={(e) => handlePaste(e)} onChange={(e) => handleInputChange(e, 2)} onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} type="number" name="verifyCode2" id="verifyCode2"/>
                    <input className="text-white text-xl text-center w-1/6 sm:min-h-12 lg:min-h-20 bg-white/0 border border-[#777F8B] py-4 rounded sm:rounded-xl" maxLength={1} value={verificationCode[3]} onPaste={(e) => handlePaste(e)} onChange={(e) => handleInputChange(e, 3)} onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} type="number" name="verifyCode3" id="verifyCode3"/>
                    <input className="text-white text-xl text-center w-1/6 sm:min-h-12 lg:min-h-20 bg-white/0 border border-[#777F8B] py-4 rounded sm:rounded-xl" maxLength={1} value={verificationCode[4]} onPaste={(e) => handlePaste(e)} onChange={(e) => handleInputChange(e, 4)} onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} type="number" name="verifyCode4" id="verifyCode4"/>
                    <input className="text-white text-xl text-center w-1/6 sm:min-h-12 lg:min-h-20  bg-white/0 border border-[#777F8B] py-4 rounded sm:rounded-xl" maxLength={1} value={verificationCode[5]} onPaste={(e) => handlePaste(e)} onChange={(e) => handleInputChange(e, 5)} onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} type="number" name="verifyCode5" id="verifyCode5"/>
                    </label>
                    
                    <div className='flex items-center justify-center gap-4 pt-12'>
                        <button type='submit' className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-5/6 h-11 rounded-lg border-2 border-[#727eeb] bg-[#727eeb] hover:bg-transparent transition-all duration-300">Verify code</button>
                    </div>
                    </form>
                    { (pastingError || error) && <p className="text-red-600/90 text-center pb-2">{pastingError || error}</p>}
                </div>
                <div className='flex items-center gap-2 absolute bottom-2 m-4'>
                    <p className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-white'>To resend code click</p>
                    <Link to={"/"} className='font-SignikaNegative font-bold text-xs mobileL:text-sm tablet:text-base text-[#5c90f2]'>
                        here
                    </Link>
                </div>
            </div >
        </div>
     );
}

export default VerifyCode;