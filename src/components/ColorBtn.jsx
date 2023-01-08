const ColorBtn = (props) => {
  const selectPlay = (e) => {
    e.target.classList.add("played");
    props.updatePlaysOptions(props.colorValue, Number(e.target.innerHTML));
  };

  if (
    (Number(props.textValue) === 2 &&
      (props.colorValue === "green" || props.colorValue === "blue")) ||
    (Number(props.textValue) === 12 &&
      (props.colorValue === "red" || props.colorValue === "yellow"))
  ) {
    if (props.colorObj.playsMade.length < 5) {
      return (
        <button
          className={`${props.classProp} none-play`}
          onClick={(e) => {
            selectPlay(e);
          }}
        >
          {props.textValue}
        </button>
      );
    }
  }
  return (
    <button
      className={`${props.classProp}${
        props.colorObj.playsMade[length - 1] >= Number(props.textValue) &&
        (props.colorValue === "red" || props.colorValue === "yellow")
          ? " none-play"
          : ""
      }${
        props.colorObj.playsMade[length - 1] <= Number(props.textValue) &&
        (props.colorValue === "green" || props.colorValue === "blue")
          ? " none-play"
          : ""
      }`}
      onClick={(e) => {
        selectPlay(e);
      }}
    >
      {props.textValue}
    </button>
  );
};

export default ColorBtn;
