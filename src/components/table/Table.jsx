import React, { useEffect } from 'react'
import './table.scss'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProduct } from '../../Redux/actions/productActions';
import Loader from '../loader/loader';
import { Box, Button } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  




const Tables = () => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.adminProducts)




  useEffect(()=>{
    dispatch(getProduct())
  }, [])

  const deletion=(id)=>{
    dispatch(deleteProduct(id))
  }
    


  return (
    <TableContainer component={Paper} style={{overflowX: 'scroll'}}>
    <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table" >
      <TableHead>
        <TableRow>
          <StyledTableCell>Picture</StyledTableCell>
          <StyledTableCell align="right">category</StyledTableCell>
          <StyledTableCell align="right">Title</StyledTableCell>
          <StyledTableCell align="right">Discount</StyledTableCell>
          <StyledTableCell align="right">Cost</StyledTableCell>
          <StyledTableCell align="right">quantity</StyledTableCell>
          <StyledTableCell >Actions</StyledTableCell>
          
        </TableRow>
      </TableHead>
      {
        products.products?

        <TableBody>
         
          {products.products?.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row" >
                
                <img src={product.url} style={{width:30, height:30}} alt={product.id}/>
              </StyledTableCell>
              <StyledTableCell align="right">{product.category}</StyledTableCell>
              <StyledTableCell align="right">{product.title.shortTitle}</StyledTableCell>
              <StyledTableCell align="right">{product.price.mrp}</StyledTableCell>
              <StyledTableCell align="right">{product.price.cost}</StyledTableCell>
              <StyledTableCell align="right">{product.quantity}</StyledTableCell>
              <StyledTableCell >               
                <Button onClick={()=>deletion(product._id)} style={{color:'red'}}>Delete</Button>
                
              </StyledTableCell>
            </StyledTableRow>
          ))
          }
      </TableBody>
        
        :
        <Box>
          <Loader/>
        </Box>
        

      }
      
    </Table>
  </TableContainer>
  )
}

export default Tables