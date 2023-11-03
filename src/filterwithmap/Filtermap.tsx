import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Filtermap = () => {
  const [searchName, setsearchName] = useState("");

  const filtername = Data?.filter((filteRName: any, index: any) => {
    if (filteRName.name.toLowerCase().includes(searchName.toLowerCase())) {
      return filteRName.name;
    }
  });

  return (
    <>
      <Box sx={{ width: "40%", margin: "10px auto" }}>
        <TextField
          placeholder="EnterName"
          sx={{ width: "250px", margin: "10px auto" }}
          onChange={(e) => setsearchName(e.target.value)}
        />
        {filtername?.length > 0 ? (
          filtername?.map((item: any, index: any) => {
            return (
              <Box sx={{ width: "40%", margin: "10px auto" }}>
                <Typography variant="h4">{item.name}</Typography>
              </Box>
            );
          })
        ) : (
          <Typography>Name Not Found</Typography>
        )}
      </Box>
    </>
  );
};

export default Filtermap;

// Data.js is below

export let Data: any = [
  {
    id: 1,
    name: "rohit",
    email: "rohit@gmail.com",
    number: "979774873757",
  },
  {
    id: 2,
    name: "faiz",
    email: "faiz@gmail.com",
    number: "94554787375734",
  },
  {
    id: 3,
    name: "sanu",
    email: "sanu@gmail.com",
    number: "9455573757364",
  },
  {
    id: 4,
    name: "ajay",
    email: "ajay@gmail.com",
    number: "9454937574",
  },
  {
    id: 5,
    name: "amit",
    email: "amit@gmail.com",
    number: "9454764685764",
  },
  {
    id: 6,
    name: "amit",
    email: "amit@gmail.com",
    number: "9454456547",
  },
  {
    id: 7,
    name: "bhuvi",
    email: "bhuvi@gmail.com",
    number: "94544977",
  },
  {
    id: 8,
    name: "shrikant",
    email: "shrikant@gmail.com",
    number: "9455677",
  },
  {
    id: 9,
    name: "pratik",
    email: "pratik@gmail.com",
    number: "945569jgdk",
  },
  {
    id: 10,
    name: "aman",
    email: "aman@gmail.com",
    number: "945685677",
  },
  {
    id: 11,
    name: "tranu",
    email: "sanu@gmail.com",
    number: "9456785677",
  },
  {
    id: 12,
    name: "rohjgk",
    email: "sythft@gmail.com",
    number: "9455677",
  },
  {
    id: 13,
    name: "shrhglt",
    email: "rohjant@gmail.com",
    number: "9455677",
  },
  {
    id: 14,
    name: "srthant",
    email: "oireyjhikant@gmail.com",
    number: "9455677",
  },
  {
    id: 15,
    name: "srtlkjhant",
    email: "shrikant@gmail.com",
    number: "9455677",
  },
  {
    id: 16,
    name: "eoutg nant",
    email: "oirent@gmail.com",
    number: "9455677",
  },
  {
    id: 17,
    name: "shrikant",
    email: "shrikant@gmail.com",
    number: "9455677",
  },
  {
    id: 18,
    name: "piobkant",
    email: "oityhikant@gmail.com",
    number: "9455677",
  },
];
