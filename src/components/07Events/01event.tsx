const Button = () => {
  const handleClick = () => {
    alert("the button was clicked");
  };

  return (
    <button onClick={handleClick} className="bg-violet-700">
      Click This 👇️
    </button>
  );
};

export default Button;
