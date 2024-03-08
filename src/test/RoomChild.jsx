import { Outlet } from "react-router-dom";

function RoomChild() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RoomChild;
