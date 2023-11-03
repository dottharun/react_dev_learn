import { PersonData, getImageUrl } from "./01utils";

export type AvatarData = {
  person: PersonData;
  size: number;
};

function Avatar({ person, size }: AvatarData) {
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
