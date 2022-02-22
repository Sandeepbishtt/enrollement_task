import React, { useEffect, useState } from "react";
import { AppBar, Typography, Box, Toolbar, Modal } from "@mui/material";
import AddStudent from "./StudentForm/AddStudent";
import { useSelector } from "react-redux";
import { fetchData } from "../Redux/Slice";
import DetailTable from "./DetailTable";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "-webkit-fill-available",
};
const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const data = useSelector(fetchData);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
const [editIndex,setEditIndex] = useState(0)
  const handleOpen = () => {
    setOpen(true);
    setEdit(false);
  };
  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddStudent
            close={() => setOpen()}
            editVal={edit}
            editDataValue={editData}
            editIndex={editIndex}
          />
        </Box>
      </Modal>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ width: "200px", margin: "1rem" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Enrollment App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ width: "170px",marginLeft: "75rem",marginBottom:'1rem' }}
        >
          <Toolbar onClick={handleOpen}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              New Student
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <DetailTable edit={setEdit} editData={setEditData} open={setOpen} editIndex={setEditIndex}/>
    </>
  );
};

export default Dashboard;
