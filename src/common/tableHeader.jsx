import React from "react";

//columns : array
//sortColumn
//
const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = (path) => {
    const updatedSortColumn = { ...sortColumn }; // Copying sortColumn object
    if (updatedSortColumn.path === path) {
      updatedSortColumn.order =
        updatedSortColumn.order === "asc" ? "desc" : "asc"; // Correcting assignment
    } else {
      updatedSortColumn.path = path;
      updatedSortColumn.order = "asc";
    }
    onSort(updatedSortColumn); // Passing the updated sortColumn to the onSort function
  };

  const renderSortIcon = (column) => {
    if(column.path !== sortColumn.path){
      return null;
    }
    if(sortColumn.order === 'asc'){
      return <i className="fa fa-sort-asc" />
    }
    return <i className="fa fa-sort-desc" />
  }
  
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th 
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
