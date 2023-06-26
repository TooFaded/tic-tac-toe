import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerTurn, setPlayerTurn] = useState("circle");
  const [winningMsg, setWinningMessage] = useState(null);

  const winMessage = "It is now " + playerTurn + "'s go.";

  return (
    <div className="App">
      <p>{winMessage}</p>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
