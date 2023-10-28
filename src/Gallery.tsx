import Profile from "./Profile";

const Gallery = () => {
  return (
    <>
      <h1>Amazing scientists</h1>
      {/* 
      <section className="flex-row flex  border-blue-950 border-4">
        {[<Profile />, <Profile />, <Profile />]}
      </section> 
      */}

      {/* Does the samething as above  */}
      <section className="flex-row flex border-blue-950 border-4 ">
        {Array(5).fill(<Profile />)}
      </section>

      {/* used by some weird people */}
      {/* 
      <section className="flex-row flex border-blue-950 border-4">
        {Array(6)
          .fill({})
          .map(() => (
            <Profile />
          ))}
      </section> 
      */}
    </>
  );
};

export default Gallery;
