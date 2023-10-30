import { Avatar } from "./01Avatar2";

// having default values for props
// function Avatar2({ person, size = 100 }) {
//   // ...
// }

const Profile2 = (props) => {
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
