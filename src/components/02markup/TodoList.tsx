const today = new Date();

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-IN", { weekday: "long" }).format(date);
};

const TodoList = () => {
  const name = "Hedy Lamarr";
  return (
    <div className="border-2 border-red-400 w-fit">
      <h1>
        {name}'s To Do List for {formatDate(today)}
      </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt={name}
        className="photo"
      />
      <ul style={{ backgroundColor: "black", color: "pink" }}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
};

export default TodoList;
