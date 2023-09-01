import React from "react";

const TableHeader = () => {
  return (
    <thead className='custom-header'>
      {
        <tr>
          <th>TAG</th>
          <th>RO</th>
          <th>VEHICLE</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>DESCRIPTION</th>
          <th>WAITING</th>
          <th></th>
        </tr>
      }
    </thead>
  );
};

export default TableHeader;
