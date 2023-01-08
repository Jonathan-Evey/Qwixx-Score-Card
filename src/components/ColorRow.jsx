import ColorBtn from "./ColorBtn";

const ColorRow = (props) => {
  let pointsArray = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];
  const updatePlaysMade = (colorValue, value) => {
    let updatedObj = props.colorObj;
    updatedObj.playsMade.push(value);
    if (
      value === 12 &&
      (props.colorValue === "red" || props.colorValue === "yellow")
    ) {
      updatedObj.playsMade.push("lock");
      if (props.rowsLocked.length === 1) {
        props.setGameOver(true);
      }
      props.setRowsLocked([...props.rowsLocked, props.colorValue]);
    }
    if (
      value === 2 &&
      (props.colorValue === "green" || props.colorValue === "blue")
    ) {
      updatedObj.playsMade.push("lock");
      if (props.rowsLocked.length === 1) {
        props.setGameOver(true);
      }
      props.setRowsLocked([...props.rowsLocked, props.colorValue]);
    }
    updatedObj.points = pointsArray[updatedObj.playsMade.length];
    props.setObj(updatedObj);
    props.setUpdateScore(!props.updateScore);
  };
  const updatePlaysOptions = (colorValue, playValue) => {
    if (playValue !== "lock") {
      updatePlaysMade(colorValue, playValue);
    }
    let rowBtns = document.getElementsByClassName(`${colorValue}`);
    for (let btn in rowBtns) {
      if (rowBtns.hasOwnProperty(btn)) {
        if (
          playValue >= Number(rowBtns[btn].innerHTML) &&
          (props.colorValue === "red" || props.colorValue === "yellow")
        ) {
          rowBtns[btn].classList.add("none-play");
        }
        if (
          playValue <= Number(rowBtns[btn].innerHTML) &&
          (props.colorValue === "green" || props.colorValue === "blue")
        ) {
          rowBtns[btn].classList.add("none-play");
        }
        if (props.colorValue === "green" || props.colorValue === "blue") {
          if (playValue == 2 && rowBtns[btn].classList.contains("lock")) {
            rowBtns[btn].classList.add("played");
            rowBtns[btn].classList.add("none-play");
          }
        }
        if (props.colorValue === "red" || props.colorValue === "yellow") {
          if (playValue == 12 && rowBtns[btn].classList.contains("lock")) {
            rowBtns[btn].classList.add("played");
            rowBtns[btn].classList.add("none-play");
          }
        }
        if (playValue === "lock") {
          rowBtns[btn].classList.add("none-play");
        }
      }
    }
    if (playValue === "lock") {
      if (props.rowsLocked.length === 1) {
        props.setGameOver(true);
      }
      props.setRowsLocked([...props.rowsLocked, props.colorValue]);
    }
  };
  return (
    <div className={`grid color-row container ${props.colorValue}`}>
      {props.colorValue === "green" || props.colorValue === "blue" ? (
        <button
          className={`btn play-option lock ${props.colorValue}`}
          onClick={() => {
            updatePlaysOptions(props.colorValue, "lock");
          }}
        >
          lock
        </button>
      ) : null}
      {props.colorObj.playOptions.map((each) => {
        if (each === 1) {
          return;
        }
        return (
          <ColorBtn
            key={`${props.colorValue}-${each}`}
            textValue={each}
            colorValue={props.colorValue}
            updatePlaysOptions={updatePlaysOptions}
            classProp={`btn play-option ${props.colorValue}`}
            colorObj={props.colorObj}
          />
        );
      })}
      {props.colorValue === "red" || props.colorValue === "yellow" ? (
        <button
          className={`btn play-option lock ${props.colorValue}`}
          onClick={() => {
            updatePlaysOptions(props.colorValue, "lock");
          }}
        >
          lock
        </button>
      ) : null}
    </div>
  );
};

export default ColorRow;
