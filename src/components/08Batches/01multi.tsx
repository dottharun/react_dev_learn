import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="border p-5 border-yellow-500 flex flex-row w-fit">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1); //during rendering gets current state and update it
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}
