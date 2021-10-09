# Reusable React Table

### Demo
[https://reusable-react-table-manish.netlify.app/](https://reusable-react-table-manish.netlify.app/)
### How to use
Follow these steps to implement a reusable table component
1. Clone the repo
2. cd reusable-table-component/
3. import Table from "./components/Table";
4. Use in the following manner
```
	<Table
        resultPerPage
        columnHeads
        tableData
        updateChanges
      />
```
## Props

| Prop          | Description                                                     | Type    | 
| ----------------- | ------------------------------------------------------------ | ------- | 
| resultPerPage     |number of results to be diplayed for pagination                    | number |
| columnHeads              | Object containing all the relevent column with corresponding keys  | Object{column-keys} |
| tableData   | Array of objects of data to be displayed on table | Array[...Objects] |
| updateChanges | Function to update the data changes in cells | Function |
