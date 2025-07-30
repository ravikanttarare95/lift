function Button({ onclick, btnName, disabled, isActive }) {
  return (
    <div>
      {" "}
      <button
        className={`min-w-[50px] w-fit border text-sm font-semibold rounded-full shadow-lg shadow-gray-400 ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : ` cursor-pointer  ${
                isActive ? "bg-green-300 text-green-800" : "bg-gray-300"
              }`
        }`}
        onClick={onclick}
        disabled={disabled}
      >
        {btnName}
      </button>
    </div>
  );
}

export default Button;
