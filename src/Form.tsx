// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import { TextField, Typography, Button } from "@mui/material";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// let data = [
//   {
//     name: "Rohit",
//   },
//   {
//     name: "Mohan",
//   },
//   {
//     name: "Ram",
//   },
//   {
//     name: "Rohit",
//   },
//   {
//     name: "India",
//   },
//   {
//     name: "India",
//   },
//   {
//     name: "sanit",
//   },
//   {
//     name: "sanit",
//   },
//   {
//     name: "sanit",
//   },
// ];

// const Form = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <Box
//       sx={{
//         width: { lg: "40%", md: "60%", sm: "80%", xs: "90%" },
//         textAlign: "center",
//         margin: "20px auto",
//       }}
//     >
//       <Box sx={{ margin: "30px 0px" }}>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 350 }} aria-label="simple table">
//             {data.length > 0 ? (
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell align="right">number of time</TableCell>
//                 </TableRow>
//               </TableHead>
//             ) : null}
//             <TableBody>
//               {data?.map((item: any, index: number) => {
//                 return (
//                   <>
//                     <TableRow
//                       key={index}
//                       sx={{
//                         "&:last-child td, &:last-child th": { border: 0 },
//                       }}
//                     >
//                       <TableCell component="th" scope="row">
//                         {item.name}
//                       </TableCell>
//                       <TableCell align="right">{item.email}</TableCell>
//                     </TableRow>
//                   </>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// };

// export default Form;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const Form: React.FC = () => {
  const [sec, setSec] = useState<number>(300);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isRunning && sec > 0) {
      interval = setInterval(() => {
        setSec((prevSec) => prevSec - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [sec, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSec(300);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes: number = Math.floor(timeInSeconds / 60);
    const seconds: number = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  return (
    <Box sx={{ width: "40%", margin: "30px auto" }}>
      <Typography>StopWatch {formatTime(sec)}</Typography>

      <Button onClick={handleStart} sx={{ margin: "10px" }}>
        Start
      </Button>
      <Button onClick={handleReset} sx={{ margin: "10px" }}>
        Reset
      </Button>
    </Box>
  );
};

export default Form;
