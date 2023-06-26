const Cell = ({
  id,
  cell,
  setCells,
  playerTurn,
  setPlayerTurn,
  cells,
  winningMsg,
}) => {
  const handleClick = (e) => {
    const isTaken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    console.log(e.target);

    if (!isTaken) {
      if (playerTurn === "circle") {
        e.target.firstChild.classList.add("circle");
        handleCellChange("circle");
        setPlayerTurn("cross");
      }
      if (playerTurn === "cross") {
        e.target.firstChild.classList.add("cross");
        handleCellChange("cross");
        setPlayerTurn("circle");
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div
      className="box"
      id={id}
      onClick={!winningMsg ? handleClick : undefined}
    >
      <div className={cell}></div>
    </div>
  );
};
export default Cell;
