import React from 'react'
import {Dialog,DialogContent,DialogTitle,Typography } from '@mui/material'

const Detail = (props) =>{
	const {title,open,setOpen,data} = props
	return(
<Dialog
maxWidth ="sm"
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="confirm-dialog">
<DialogTitle id="confirm-dialog"> {title} </DialogTitle>
<DialogContent>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Name: {data.studentName}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Father's Name: {data.fatherName}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Email: {data.email}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phone Number: {data.phoneNumber}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Address: {data.address}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              City: {data.city}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              State: {data.state}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pincode: {data.pincode}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Class: {data.class}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Marks: {data.marks}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enrolled Date/Time: {data.date}
            </Typography>
</DialogContent>
</Dialog>


		)
}
export default Detail