import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {  Button } from '@mui/material';
import { getDeliveryProducts } from '../../Redux/actions/adminActions';
import Loader from '../loader/loader';
import axios from 'axios';

const columns = [
  { id: 'name', label: 'Customer Name', maxWidth: 170 },
  { id: 'code', label: 'Address', maxWidth: 100 },
  {
    id: 'population',
    label: 'Phone',
    maxWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Price',
    maxWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    maxWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'actions',
    label: 'Actions',
    maxWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];



export default function DeliveryTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows]=React.useState(null)
  const [loading, setLoading]=React.useState(true)

  const delived=(id)=>{
    console.log(id)
    const deliveryStatus=async(id)=>{
      try {
        const res=await axios.put(`http://localhost:3001/delivery/${id}`);
        
        
      } catch (error) {
        console.log(error)
      }
      
    }
    deliveryStatus(id)
  }
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  React.useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getDeliveryProducts();
        setRows(data);
        setLoading(false)
        
      } catch (error) {
        console.log(error);
      }
    };
  
    fetch();
  }, []);

  return (
    <>
    {
      loading? <Loader/>
      :
      <Paper sx={{ width: '80vw', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.maxWidth, background: 'black', color:'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell >{row.customer.firstname+ ' '+row.customer.lastname}</TableCell>
                    <TableCell >{row.address}</TableCell>
                    <TableCell align='right'>{row.customer.phone}</TableCell>
                    <TableCell align='right'>{row.totalAmount}</TableCell>
                    <TableCell align='right'>
                    {row.status}
                    </TableCell>
                    <TableCell align='right'>
                    <Button onClick={()=>delived(row._id)}>Delivered</Button>
                    </TableCell>

                   
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    }
    
    </>
  );
}