import { Avatar, AvatarData } from "./01Avatar2";

// having default values for props
// function Avatar2({ person, size = 100 }) {
//   // ...
// }     l

const Profile2 = (props: AvatarData) => {
  return (
    <>
      {/* with spread syntax */}
      <Avatar {...props} />

      {/* without spread syntax */}
      <Avatar person={props.person} size={props.size} />
    </>
  );
};

export default Profile2;
