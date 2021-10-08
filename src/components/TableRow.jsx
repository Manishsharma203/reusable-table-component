import React, { useState } from "react";
import RowCell from "./RowCell";

export default function TableRow(props) {
  const { rowElements, updateChanges } = props;
  return (
    <tr>
      {Object.entries(rowElements).map((element, index) => (
        <td
          width={Math.ceil(100 / Object.values(rowElements).length)}
          key={index}
          style={{ resize: "horizontal", overflow: "hidden" }}
        >
          <RowCell
            rowId={rowElements.id}
            cellElement={element}
            updateChanges={updateChanges}
          />
        </td>
      ))}
    </tr>
  );
}
