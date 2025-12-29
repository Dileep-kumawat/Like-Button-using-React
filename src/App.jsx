import { useMemo, useState } from "react"

const App = () => {
  const [like, setLike] = useState(false);
  const random = useMemo(() => {
    let rand = Math.floor(Math.random() * 200)-100;
    return `${rand}deg`;
  }, [like]);

  function likeHandler() {
    setLike(true)

    setTimeout(() => setLike(false), 1000)
  }

  return (
    <div className="h-screen w-full bg-[#0C1014] text-white flex justify-center items-center">
      <div
        onDoubleClick={likeHandler}
        className="w-1/3 rounded-2xl overflow-hidden cursor-pointer relative"
      >
        <img
          className="w-full object-cover object-center"
          src="post.jpg"
          alt="post"
        />

        <div className="absolute bottom-5 right-5 text-5xl">
          {like ? <i onClick={likeHandler} className="text-red-500 ri-heart-fill"></i> : <i onClick={likeHandler} className="ri-heart-line"></i>}
        </div>

        {like && (
          <div style={{"--rot":random}} className="absolute top-1/2 left-1/2 -translate-1/2 opacity-0 open text-9xl pointer-events-none">
            <i className="heart ri-heart-fill"></i>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
