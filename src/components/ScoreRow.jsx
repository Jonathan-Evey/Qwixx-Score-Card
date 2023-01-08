import { useEffect } from "react";

const ScoreRow = (props) => {
  useEffect(() => {}, [props.updateScore]);
  return (
    <div className="row card score">
      <div className="box red">
        <p>{props.gameOver ? `${props.red.points}` : null}</p>
      </div>
      <p>+</p>
      <div className="box yellow">
        <p>{props.gameOver ? `${props.yellow.points}` : null}</p>
      </div>
      <p>+</p>
      <div className="box green">
        <p>{props.gameOver ? `${props.green.points}` : null}</p>
      </div>
      <p>+</p>
      <div className="box blue">
        <p>{props.gameOver ? `${props.blue.points}` : null}</p>
      </div>
      <p>-</p>
      <div className="box no-plays">
        <p>{props.gameOver ? `${props.noPlay.length * 5}` : null}</p>
      </div>
      <p>=</p>
      <div className="box total">
        <p>
          {props.gameOver
            ? `${
                props.red.points +
                props.yellow.points +
                props.green.points +
                props.blue.points -
                props.noPlay.length * 5
              }`
            : null}
        </p>
      </div>
    </div>
  );
};

export default ScoreRow;
