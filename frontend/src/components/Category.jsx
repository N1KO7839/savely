function Category({ category, amount }) {
  return (
    <div className="flex flex-row items-center justify-between w-11/12 p-4 m-2 bg-[#2a374a] rounded-lg">
      <div className="flex items-start text-center gap-2">
        <img
          className="w-5"
          src={`./src/assets/${category}.png`}
          alt="category icon"
        />
        <p className="text-lg font-Overpass font-semibold text-white">{category}</p>
      </div>
        <p className="text-lg font-SignikaNegative font-bold text-white">{amount}</p>
    </div>
  );
}

export default Category;
