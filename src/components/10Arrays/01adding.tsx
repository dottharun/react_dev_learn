import { useState } from "react";

type ArtistData = {
  id: number;
  name: string;
};

//example to add into an array by useState
export default function ArrList() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState<ArtistData[]>([]);
  const [nextId, setId] = useState(0);

  const handleButtonClick = () => {
    setArtists([...artists, { id: nextId, name: name }]);
    setId(nextId + 1);
  };

  return (
    <div className="border border-blue-600 w-fit">
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleButtonClick}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
