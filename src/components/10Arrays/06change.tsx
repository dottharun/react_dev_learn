import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

//sometimes we for some complex changes to the state array we cannot use map of filter
//so we just make a copy of the state array and make changes in that
//**Note: only works for array for primitives - since its a shallow copy
export default function ReverseList() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list]; //shallow copy, to not mutate
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
