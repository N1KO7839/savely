function InformationsCard({title, value, icon}) {
    return ( 
        <div className="flex-col justify-center items-center font-SignikaNegative text-white md:w-72 xl:w-96 2xl:w-1/3  h-24 p-4 m-4 bg-[#1f2937] rounded-lg">
            <div className="flex justify-between">
                <h1 className="text-white/40 font-SignikaNegative font-semibold text-xl">{title}</h1>
                <img className="w-6 h-6" src={icon} alt="" />
            </div>
                <p className="font-bold text-2xl">${value}</p>
        </div>
     );
}

export default InformationsCard;