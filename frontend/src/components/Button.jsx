function Button({ text, onClick }) {
  return (
    <button
      className="w-36 h-9 font-SignikaNegative font-medium text-lg text-white rounded-lg bg-[#4743c5] hover:bg-indigo-900 transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
