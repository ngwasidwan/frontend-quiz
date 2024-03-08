import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <button className="home-btn" onClick={() => navigate(-1)}>
      Home
    </button>
  );
}

export default HomeButton;
