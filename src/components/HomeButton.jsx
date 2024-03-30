import { useNavigate } from "react-router-dom";

function HomeButton() {
  function handleNavigate() {
    const exitQuiz = confirm("Are you sure you want to exit quiz?");

    exitQuiz && navigate(-1);
  }

  const navigate = useNavigate();
  return (
    <button className="home-btn" onClick={handleNavigate}>
      Home
    </button>
  );
}

export default HomeButton;
