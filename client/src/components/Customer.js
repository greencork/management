import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} alt="profile" />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
}

export default Customer;
