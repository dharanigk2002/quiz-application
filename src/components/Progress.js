function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={answer !== null ? index + 1 : index}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
