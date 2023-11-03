export type PersonData = {
  name: string;
  imageId: string;
};

export function getImageUrl(person: PersonData, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
