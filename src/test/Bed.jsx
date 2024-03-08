import { useNavigate } from "react-router-dom";

const style = { backgroundColor: "#fef4dd", width: "20px", height: "20px" };

function Bed() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>bed section</h1>
      <p>this is where my bed is and it is very comfortable to sleep on</p>

      <div style={style} onClick={() => navigate(-1)}></div>
    </div>
  );
}

export default Bed;
