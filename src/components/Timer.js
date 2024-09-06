import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = Math.floor(secondsRemaining % 60);
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
