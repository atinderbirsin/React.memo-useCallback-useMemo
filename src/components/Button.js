function Button({
  primary,
  secondary,
  warn,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let btnClasses = `px-3 py-1.5 text-white flex items-center active:translate-y-1 transition duration-100 ease-in `;

  btnClasses += primary
    ? "bg-blue-500"
    : secondary
    ? "bg-green-500"
    : warn
    ? "bg-yellow-500"
    : danger
    ? " bg-red-500"
    : "";

  btnClasses += rounded ? " rounded" : " ";

  btnClasses +=
    primary && outline
      ? " bg-transparent outline-bliue-500 text-black"
      : secondary && outline
      ? " bg-transparent outline-green-500 text-black"
      : warn && outline
      ? " bg-transparent outline-yellow-500 text-black"
      : danger && outline
      ? " bg-transparent outline-red-500 text-black"
      : "";


  return (
    <button {...rest} className={`${btnClasses} ${rest.className}`}></button>
  );
}

export default Button;
