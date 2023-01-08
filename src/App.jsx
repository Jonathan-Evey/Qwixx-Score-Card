import { useState } from "react";
import { PlayArea } from "./functions/colorRowObj";
import reactLogo from "./assets/react.svg";
import ColorRow from "./components/ColorRow";
import ScoreRow from "./components/ScoreRow";
import NoPlayRow from "./components/NoPlayRow";

function App() {
  const [red, setRed] = useState(PlayArea(12));
  const [yellow, setYellow] = useState(PlayArea(12));
  const [green, setGreen] = useState(PlayArea(12));
  const [blue, setBlue] = useState(PlayArea(12));
  const [noPlay, setNoPlay] = useState([]);
  const [rowsLocked, setRowsLocked] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const [updateScore, setUpdateScore] = useState(false);

  return (
    <div className={`App${gameOver ? " game-over" : ""}`}>
      <ColorRow
        colorObj={red}
        setObj={setRed}
        colorValue={"red"}
        setUpdateScore={setUpdateScore}
        updateScore={updateScore}
        rowsLocked={rowsLocked}
        setRowsLocked={setRowsLocked}
        setGameOver={setGameOver}
      />
      <ColorRow
        colorObj={yellow}
        setObj={setYellow}
        colorValue={"yellow"}
        setUpdateScore={setUpdateScore}
        updateScore={updateScore}
        rowsLocked={rowsLocked}
        setRowsLocked={setRowsLocked}
        setGameOver={setGameOver}
      />
      <ColorRow
        colorObj={green}
        setObj={setGreen}
        colorValue={"green"}
        setUpdateScore={setUpdateScore}
        updateScore={updateScore}
        rowsLocked={rowsLocked}
        setRowsLocked={setRowsLocked}
        setGameOver={setGameOver}
      />
      <ColorRow
        colorObj={blue}
        setObj={setBlue}
        colorValue={"blue"}
        setUpdateScore={setUpdateScore}
        updateScore={updateScore}
        rowsLocked={rowsLocked}
        setRowsLocked={setRowsLocked}
        setGameOver={setGameOver}
      />

      <div className="row card-bottom">
        <ScoreRow
          updateScore={updateScore}
          red={red}
          yellow={yellow}
          green={green}
          blue={blue}
          noPlay={noPlay}
          gameOver={gameOver}
        />
        <NoPlayRow
          noPlay={noPlay}
          setNoPlay={setNoPlay}
          setGameOver={setGameOver}
        />
      </div>
    </div>
  );
}

export default App;
