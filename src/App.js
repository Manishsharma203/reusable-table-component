import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataFetchingError, setDataFetchingError] = useState(false);
  const columnHeads = {
    id: "Id",
    first_name: "First Name",
    last_name: "Last Name",
    email: "Email",
    gender: "Gender",
    ip_address: "IP Address",
  };
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    Papa.parse("MOCK_DATA.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log("Finished:", results.data, results.errors);
        if (results.errors.length > 0) {
          setDataFetchingError(true);
          console.error(results.errors);
          return;
        }
        // const filteredData = results.data.filter((e, i) => i < 100);
        // setData(filteredData);
        setData(results.data)
        setDataLoading(false);
      },
    });
  }
  const updateChanges = (rowId, keyName, value) => {
    const copyData = [...data];
    copyData.forEach((e) => {
      if (e.id === rowId) {
        e[keyName] = value;
      }
    });
    setData(copyData);
  };
  if (dataLoading) {
    return <h1>Data Loading....</h1>;
  }
  return (
    <div className="App">
      <h1>Reusable Table Component</h1>
      <Table
        resultPerPage={10||data.length}
        columnHeads={columnHeads}
        tableData={data}
        updateChanges={updateChanges}
      />
    </div>
  );
}

export default App;
