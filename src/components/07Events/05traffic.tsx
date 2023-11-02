import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    //keeping the set func above or below the alerts don't make any difference
    //since react-dom renders in batches
    setWalk(!walk);

    if (walk) {
      alert("Stop is next");
    } else {
      alert("Walk is next");
    }
  }

  return (
    <div className="border w-fit border-orange-600 p-10">
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </div>
  );
}
