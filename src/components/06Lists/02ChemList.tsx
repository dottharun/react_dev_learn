import { people, PersonData } from "./02data2";

function getImageUrl(person: PersonData) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export default function List3() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li>
      <img
        className="rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <b>{person.name}: </b>
      <p>{person.profession + " known for " + person.accomplishment}</p>
    </li>
  ));
  return (
    <ul className="border-4 border-green-600 w-fit bg-slate-700">
      {listItems}
    </ul>
  );
}
