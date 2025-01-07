import Button from "./Button";
import HamburgerMenu from "./HamburgerList";

function Navbar({ setShowed }) {
  return (
    <div
      id="navbar"
      className="flex sm:flex-row justify-between bg-[#1f2937] text-white shadow-lg"
    >
      <div id="logo" className="flex items-center gap-2 ml-6 m-3.5">
        <img className="w-8 h-8" src="./src/assets/logo.png" alt="Logo icon" />
        <h1 className="font-Overpass font-bold text-xl">Savely</h1>
      </div>
      <div id="buttons" className="hidden sm:flex gap-6 mr-6 m-3.5">
        <Button text="+ Add Expense" onClick={() => setShowed(true)} />
        <Button text="Login/Logout" onClick={() => alert("ASD")} />
      </div>
      <div className="sm:hidden m-3.5">
        <HamburgerMenu setShowed={setShowed}/>
      </div>
    </div>
  );
}

export default Navbar;
