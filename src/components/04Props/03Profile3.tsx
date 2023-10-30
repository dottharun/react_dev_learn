import { Avatar } from "./01Avatar2";

const Card = ({ children, a, b }) => {
  //   console.log(children);
  return (
    <div className="border rounded-2xl w-fit p-6 bg-gray-500">
      {children}
      <div>
        {a} {b}
      </div>
    </div>
  );
};

const Profile3 = () => {
  return (
    <Card a="999999" b="67676767">
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <div>NICE</div>
      this string is a big string i hope so
    </Card>
  );
};

export default Profile3;
