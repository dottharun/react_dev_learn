import { useState } from "react";
import { sculptureList } from "./04data";

export default function Gallery2() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    if (index + 1 < sculptureList.length) {
      setIndex(index + 1);
    }
  };
  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const sculpture = sculptureList[index];

  const jsx = (
    <div className="w-[800px] h-[600px] border border-blue-400">
      <button onClick={handleClick}>Next</button>
      <h2>
        <b>{sculpture.name}</b>
        <p>by {sculpture.artist}</p>
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore ? <p className="h-[120px]">{sculpture.description}</p> : null}
      <img src={sculpture.url} alt={sculpture.alt} width={300} height={300} />
    </div>
  );

  console.log(jsx);
  return jsx;
}
