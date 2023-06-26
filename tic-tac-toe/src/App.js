import { useState, useEffect } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerTurn, setPlayerTurn] = useState("circle");
  const [winningMsg, setWinningMessage] = useState(null);
  const [circleScore, setCircleScore] = useState(0);
  const [crossScore, setCrossScore] = useState(0);

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

    let isDraw = true;

    winningPattern.forEach((array) => {
      let circleWin = array.every((cell) => cells[cell] === "circle");
      if (circleWin) {
        setWinningMessage("Cricle WINS!");
        setCircleScore(circleScore + 1);
        isDraw = false;
      }
    });

    winningPattern.forEach((array) => {
      let crossWin = array.every((cell) => cells[cell] === "cross");
      if (crossWin) {
        setWinningMessage("Cross WINS!");
        setCrossScore(crossScore + 1);
        isDraw = false;
      }
    });

    if (isDraw && !cells.includes("")) {
      setWinningMessage("It's a DRAW!");
    }
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setPlayerTurn("circle");
    setWinningMessage(null);
  };

  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="title"
      >
        <h1 className="title" style={{ color: "rgb(176, 71, 71)" }}>
          Tic
        </h1>
        Tac
        <h1 className="title" style={{ color: "rgb(46, 46, 191)" }}>
          Toe
        </h1>
      </h1>
      <div className="scoreboard">
        <p className="circle-score">◎ Score: {circleScore}</p>
        <p className="cross-score">✖ Score: {crossScore}</p>
      </div>
      <p>{winningMsg ? winningMsg : turnMessage}</p>
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
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default App;
