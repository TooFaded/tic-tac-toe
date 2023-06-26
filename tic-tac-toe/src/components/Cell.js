const Cell = ({
  id,
  cell,
  setCells,
  playerTurn,
  setPlayerTurn,
  cells,
  winningMsg,
}) => {
  const handleClick = () => {
    if (!cell) {
      const className = playerTurn === "circle" ? "circle" : "cross";
      updateCell(className);
      setPlayerTurn(playerTurn === "circle" ? "cross" : "circle");
    }
  };

  const updateCell = (className) => {
    const nextCells = cells.map((cell, index) =>
      index === id ? className : cell
    );
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
