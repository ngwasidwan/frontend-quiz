function PointsScored({ points, totalQuestions }) {
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
