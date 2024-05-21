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
import Button from "./components/07Events/01event";
import Toolbar from "./components/07Events/02propagation";
import Gallery2 from "./components/07Events/03state";
import TrafficLight from "./components/07Events/05traffic";
import Counter from "./components/08Batches/01multi";
// import MovingDot from "./components/09Objects/01obj";
import Form from "./components/09Objects/02form";
import Form2 from "./components/09Objects/03dynamicObj";
import Form3 from "./components/09Objects/04nested";
import ImmerForm from "./components/09Objects/05nestedImmur";
import ArrList from "./components/10Arrays/01adding";
import RemList from "./components/10Arrays/02rem";
import ShapeEditor from "./components/10Arrays/03transform";
import CounterList from "./components/10Arrays/04replace";
import InsertList from "./components/10Arrays/05insert";
import ReverseList from "./components/10Arrays/06change";
import BucketList from "./components/10Arrays/07objInArr";
import StateForm from "./components/11state/01state";

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
      <Button />
      <Toolbar />
      <Gallery2 />
      <TrafficLight />
      <Counter />
      {/* <MovingDot /> */}
      <Form />
      <Form2 />
      <Form3 />
      <ImmerForm />
      <ArrList />
      <RemList />
      <ShapeEditor />
      <CounterList />
      <InsertList />
      <ReverseList />
      <BucketList />
      <StateForm />
    </>
  );
};

export default App;
