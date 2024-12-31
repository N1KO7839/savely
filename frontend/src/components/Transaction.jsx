function Transaction({ transaction, amount }) {
  return (
    <>
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col mobileL:flex-row items-center justify-between w-11/12 p-4 m-2">
        <p className="text-base font-Overpass font-bold text-white">
          {transaction}
        </p>
        <p className="text-lg font-SignikaNegative font-bold text-[#c72a2e]">
          {amount}
        </p>
      </div>
    </div>
    <hr className="w-11/12 border-t-2 border-white/10 my-2" />
    </>
  );
}

export default Transaction;