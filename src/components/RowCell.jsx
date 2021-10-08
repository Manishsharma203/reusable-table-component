import React, { useEffect, useState } from "react";

export default function RowCell(props) {
  const { cellElement, rowId, updateChanges } = props;
  const [elementDisplay, setElementDisplayed] = useState("");
  const [openEditable, setOpenEditable] = useState(false);
  useEffect(() => {
    setElementDisplayed(cellElement[1]);
  }, [cellElement]);
  const changeHandler = (event) => {
    console.log(event.target.value);
    setElementDisplayed(event.target.value);
  };
  const focusOutHandler = () => {
    console.log("focusOutHandler");
    updateChanges(rowId, cellElement[0], elementDisplay);
    setOpenEditable(false);
  };
  const keyUpHandler = (event) => {
    console.log("keyUpHandler");
    if (event.keyCode === 13) {
      updateChanges(rowId, cellElement[0], elementDisplay);
      setOpenEditable(false);
    }
  };
  return (
    <div>
      {openEditable ? (
        <input
          style={{ width: "90%" }}
          value={elementDisplay}
          autoFocus
          onChange={changeHandler}
          onBlur={focusOutHandler}
          onKeyUp={keyUpHandler}
        />
      ) : (
        <span style={{ width: "90%" }} onClick={() => setOpenEditable(true)}>
          {elementDisplay}
        </span>
      )}
    </div>
  );
}
