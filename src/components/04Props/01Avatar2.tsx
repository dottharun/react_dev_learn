import { getImageUrl } from "./01utils";

function Avatar({ person, size }) {
  return (
    <img
      className="rounded-full"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export { Avatar };
