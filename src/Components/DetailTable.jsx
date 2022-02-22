import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Pagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Detail from "./StudentDetail";
import { useSelector } from "react-redux";
import { fetchData } from "../Redux/Slice";
const DetailTable = ({ edit, editData, open, editIndex }) => {
  const details = JSON.parse(localStorage.getItem("item"));
  const [page, setPage] = React.useState(1);
  const [pageValue, setPageValue] = React.useState(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
    setPageValue(value - 1);
  };

  const studentDetailsHandler = (val) => {
    setDataForModal(val);
    setConfirmOpen(true);
  };
  const data = useSelector(fetchData);
  const editHandler = (val, i) => {
    edit(true);
    editData(val);
    open(true);
    editIndex(i)
   const newData = data.filter((val,index) => index !== i);
    localStorage.setItem('item',JSON.stringify(newData))
  };

  return (
    <>
      <Detail
        data={dataForModal}
        title="Student Details"
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Marks(%)</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {details !== null &&
                details
                  .slice(pageValue * 10, pageValue * 10 + 10)
                  .map((val, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell onClick={() => studentDetailsHandler(val)}>
                          {val.studentName}
                        </TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>{val.phoneNumber} </TableCell>
                        <TableCell>{val.class} </TableCell>
                        <TableCell>{val.marks} </TableCell>
                        <TableCell>
                          {" "}
                          <EditIcon
                            onClick={() => editHandler(val, index)}
                          />{" "}
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
          <Pagination
            style={{ margin: "1rem", marginLeft: "30rem" }}
            showFirstButton
            showLastButton
            count={Math.ceil(details !== null && details.length / 10)}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </TableContainer>
      </Paper>
    </>
  );
};

export default DetailTable;
