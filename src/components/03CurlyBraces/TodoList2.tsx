import Avatar from "./Avatar";

const today = new Date();

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-IN", { weekday: "long" }).format(date);
};

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const TodoList2 = () => {
  return (
    <div className="border-2 border-violet-500 w-fit" style={person.theme}>
      <h1>
        {person.name}'s To Do List for {formatDate(today)}
      </h1>
      <Avatar />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};

export default TodoList2;
