import React from 'react';
import ReactDOM from 'react-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function DynamicTable({ columns, data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column.label}</TableCell>
            ))}
            <TableCell /> {/* Empty header cell for the icon button column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {row[column.field]}
                </TableCell>
              ))}
              <TableCell>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const columns = [
  { label: 'Name', field: 'name' },
  { label: 'Age', field: 'age' },
  { label: 'Email', field: 'email' },
];

const data = [
  { name: 'John Doe', age: 25, email: 'john@example.com' },
  { name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  { name: 'Alice Johnson', age: 28, email: 'alice@example.com' },
];

function App() {
  return (
    <div>
      <h1>Dynamic Material-UI Table</h1>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
