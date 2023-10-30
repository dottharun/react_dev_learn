import Gallery from "./components/01FirstComp/Gallery";
import Profile from "./components/01FirstComp/Profile";
import TodoList from "./components/02markup/TodoList";
import Avatar from "./components/03CurlyBraces/Avatar";
import TodoList2 from "./components/03CurlyBraces/TodoList2";
import Profile2 from "./components/04Props/02Profile2";
import Profile3 from "./components/04Props/03Profile3";
import PackingList from "./components/05Conditionals/01PackingList";
import List from "./components/06Lists/01List";
import List3 from "./components/06Lists/02ChemList";

const App = () => {
  return (
    <>
      <Gallery />
      <Profile />
      <TodoList />
      <Avatar />
      <TodoList2 />
      <Profile2
        person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        size={100}
      />
      <Profile3 />
      <PackingList />
      <List />
      <List3 />
    </>
  );
};

export default App;
