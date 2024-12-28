function Button({ text, onClick }) {
  return (
    <button
      className="w-36 h-8 font-SignikaNegative font-medium text-lg text-white rounded-lg bg-indigo-500 hover:bg-indigo-700 transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
