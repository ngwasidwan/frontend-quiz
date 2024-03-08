import { Link } from "react-router-dom";
import RoomChild from "./RoomChild";
import Form from "./Form";

const style = { display: "flex", gap: "20px" };
function Room() {
  return (
    <main style={style}>
      <div>
        <h1>welcome to my room</h1>
        <p>in my room you can find my personal bathroom, my personal tub,etc</p>

        <p>
          <Link to="bed">bed</Link>
        </p>

        <Link to="chair">chair</Link>
      </div>

      <main>
        <RoomChild />
      </main>
    </main>
  );
}

export default Room;
