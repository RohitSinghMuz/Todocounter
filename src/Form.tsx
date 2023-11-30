import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

interface DataEntry {
  name: string;
}

interface DistinctNameEntry {
  name: string;
  count: number;
}

const Form: React.FC = () => {
  const [data, setData] = useState<DataEntry[]>([
    { name: "Rohit" },
    { name: "Bhuvi" },
    { name: "Rohit" },
    { name: "Bhuvi" },
    { name: "Mohan" },
    { name: "Mohan" },
    { name: "Mohan" },
    { name: "Mohan" },
    { name: "Mohan" },
    { name: "Mohan" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
    { name: "Ram" },
  ]);

  const getDistinctNamesWithCounts = (): DistinctNameEntry[] => {
    const nameCounts: Record<string, number> = data.reduce(
      (acc: any, entry) => {
        const name = entry.name;
        acc[name] = (acc[name] || 0) + 1;
        return acc;
      },
      {}
    );

    const distinctNames: DistinctNameEntry[] = Object.keys(nameCounts).map(
      (name) => ({
        name,
        count: nameCounts[name],
      })
    );

    return distinctNames;
  };

  const distinctNames: DistinctNameEntry[] = getDistinctNamesWithCounts();

  const getBackgroundColor = (count: number): string => {
    if (0 < count && count < 3) {
      return "red";
    } else if (2 < count && count < 10) {
      return "yellow";
    } else if (count >= 10) {
      return "green";
    } else {
      return "";
    }
  };

  return (
    <Box style={{ width: "40%", margin: "10px auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {distinctNames.map((entry, index) => (
              <TableRow
                key={index}
                style={{ backgroundColor: getBackgroundColor(entry.count) }}
              >
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Form;
