function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

// Here clicking once inside the button also propagates as a click on the above div element
// Thus first the button click is handled, then the above div element is handled
export default function Toolbar() {
  return (
    <div
      className="Toolbar p-5 border border-lime-500 w-fit"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
