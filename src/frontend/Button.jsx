function Button({ text, onClick }) {
  return (
    <button
      className="w-36 h-8 font-SignikaNegative font-medium text-lg text-white rounded-lg bg-indigo-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
