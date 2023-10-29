const Avatar = () => {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="rounded-full h-24" src={avatar} alt={description} />;
};

export default Avatar;
