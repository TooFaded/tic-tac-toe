const Cell = ({ id, cell, setCells, playerTurn, setPlayerTurn }) => {
  const handleClick = (e) => {
    const isTaken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    console.log(e.target);

    if (!isTaken) {
      if (playerTurn === "circle") {
        e.target.firstChild.classList.add("circle");
        setPlayerTurn("cross");
      }
      if (playerTurn === "cross") {
        e.target.firstChild.classList.add("cross");
        setPlayerTurn("circle");
      }
    }
  };

  return (
    <div className="box" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};
export default Cell;
