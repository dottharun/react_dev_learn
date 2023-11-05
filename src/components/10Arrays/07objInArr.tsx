import { useImmer } from "use-immer";

type ArtworkData = {
  id: number;
  title: string;
  seen: boolean;
};

const initialList: ArtworkData[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

type ItemListData = {
  artworks: ArtworkData[];
  onToggle: (id: number, nextSeen: boolean) => void;
};

function ItemList({ artworks, onToggle }: ItemListData) {
  return (
    <ul>
      {artworks.map((artwork: ArtworkData) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function BucketList() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  function handleToggleMyList(id: number, nextSeen: boolean) {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      if (artwork !== undefined) {
        artwork.seen = nextSeen;
      }
    });
  }

  function handleToggleYourList(id: number, nextSeen: boolean) {
    updateYourList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      if (artwork !== undefined) {
        artwork.seen = nextSeen;
      }
    });
  }

  return (
    <div className="border w-fit border-blue-600">
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  );
}
