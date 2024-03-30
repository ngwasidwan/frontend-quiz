import { useContext } from "react";
import { MyContext } from "./MyContext";

// { points, totalQuestions }
function PointsScored() {
  const { points, totalQuestions } = useContext(MyContext);
  return (
    <h1 className="score">
      {`${
        points === totalQuestions
          ? "Excellent! You had all correct 🍕"
          : `You scored ${points}/${totalQuestions}`
      }`}
    </h1>
  );
}

export default PointsScored;
