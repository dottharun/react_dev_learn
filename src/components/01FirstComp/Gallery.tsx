import Profile from "./Profile";

const Gallery = () => {
  return (
    <>
      <h1>Amazing scientists</h1>

      <section className="flex-row flex border-blue-950 border-4 w-fit">
        {/* below way gives error to give key prop */}
        {/* {Array(5).fill(<Profile />)} */}

        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
};

export default Gallery;
