const Cell = ({
  id,
  cell,
  setCells,
  playerTurn,
  setPlayerTurn,
  cells,
  winningMsg,
}) => {
  // Function to handle cell click
  const handleClick = () => {
    if (!cell) {
      // Determine the class name based on the player turn
      const className = playerTurn === "circle" ? "circle" : "cross";
      updateCell(className);
      // Update the cell and change the player turn
      setPlayerTurn(playerTurn === "circle" ? "cross" : "circle");
    }
  };
  // Function to update the cell
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
