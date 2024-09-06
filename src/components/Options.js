function Options({ question, answer, dispatch }) {
  const isSelected = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={isSelected}
          onClick={() => dispatch({ type: "setAnswer", payload: index })}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isSelected &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
