function Logo() {
  return (
    <div
      id="logo"
      className="hidden mobileL:flex items-center gap-2 mb-6 absolute top-0 left-0 m-4"
    >
      <img className="w-9" src="./src/assets/logo.png" alt="Logo icon" />
      <h1 className="text-white font-Overpass font-bold text-3xl pt-1">
        Savely
      </h1>
    </div>
  );
  
}

export default Logo;
