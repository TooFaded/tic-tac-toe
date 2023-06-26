import { useState, useEffect } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerTurn, setPlayerTurn] = useState("circle");
  const [winningMsg, setWinningMessage] = useState(null);

  const turnMessage = "It is now " + playerTurn + "'s go.";
  console.log(cells);

  const checkScore = () => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningPattern.forEach((array) => {
      let circleWin = array.every((cell) => cells[cell] === "circle");
      if (circleWin) {
        setWinningMessage("Circle WINS!");
      }
    });

    winningPattern.forEach((array) => {
      let crossWin = array.every((cell) => cells[cell] === "cross");
      if (crossWin) {
        setWinningMessage("Cross WINS!");
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="App">
      <p>{winningMsg || turnMessage}</p>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            cells={cells}
            winningMsg={winningMsg}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
