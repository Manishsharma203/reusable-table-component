import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import styles from "./Table.module.css";
import TableRow from "./TableRow";

export default function Table(props) {
  const { columnHeads, tableData, resultPerPage, updateChanges } = props;
  const [dataDisplayed, setDataDisplayed] = useState([]);
  useEffect(() => {
    setDataDisplayed(tableData);
  }, []);
  const renderDataAsperPage = (currentPage, perPageResults) => {
    const copyData = [...tableData];
    const initialValue = (currentPage - 1) * perPageResults;
    const finalValue = currentPage * perPageResults;
    const filteredData = copyData.filter(
      (e, i) => i >= initialValue && i < finalValue
    );
    setDataDisplayed(filteredData);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <table>
          <thead>
            <tr>
              {Object.values(columnHeads).map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataDisplayed.map((rowElements) => (
              <TableRow
                key={rowElements.id}
                rowElements={rowElements}
                updateChanges={updateChanges}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <Pagination
          renderDataAsperPage={renderDataAsperPage}
          totalResults={Number(tableData.length)}
          resultPerPage={resultPerPage}
        />
      </div>
    </div>
  );
}
