const NoPlayRow = (props) => {
  const selectPlay = (e) => {
    e.target.classList.add("played");
    props.setNoPlay([...props.noPlay, "No-Play"]);
    if (props.noPlay.length === 3) {
      props.setGameOver(true);
    }
  };
  return (
    <div className="container no-play">
      <h3>No Plays</h3>
      <div className="container no-play-btns">
        <button
          className="btn no-play"
          onClick={(e) => {
            selectPlay(e);
          }}
        ></button>
        <button
          className="btn no-play"
          onClick={(e) => {
            selectPlay(e);
          }}
        ></button>
        <button
          className="btn no-play"
          onClick={(e) => {
            selectPlay(e);
          }}
        ></button>
        <button
          className="btn no-play"
          onClick={(e) => {
            selectPlay(e);
          }}
        ></button>
      </div>
    </div>
  );
};

export default NoPlayRow;
