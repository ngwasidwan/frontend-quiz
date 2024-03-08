import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>this is my home</h1>
      <p>In this home i have many amazing stuffs to show to you as my guest</p>
      <p>get infos about my home in the links on the right</p>

      <main className="main">
        <Link to="room">my room</Link>
      </main>
    </div>
  );
}

export default Home;
