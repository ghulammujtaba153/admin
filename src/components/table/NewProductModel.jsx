import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Grid, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/actions/productActions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  alignItems: 'center',
  justifyContent: 'center',
};

const NewProductModel = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch()
  const [image, setImage]=useState('preview')
  const [detailImage, setDetailImage]=useState('')


  const [productInfo, setProductInfo] = useState({
    category: '',
    url: '',
    detailUrl: '',
    title: {
      shortTitle: '',
      longTitle: '',
    },
    price: {
      mrp: 0,
      cost: 0,
      discount: '0%',
    },
    quantity: 0,
    description: '',
    discount: '',
    tagline: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'url' || name==="detailUrl") {
      let reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=()=>{
        
        setProductInfo((prevInfo) => ({
          ...prevInfo,
          [name]: reader.result,
        }));
      } 
      if(name === "url"){
        setImage(URL.createObjectURL(event.target.files[0]));
      }else{
        setDetailImage(URL.createObjectURL(event.target.files[0]));
      }
      
    }
    else if (name.includes('.')) {
      const [outerKey, innerKey] = name.split('.');
      if (outerKey === 'price' && (innerKey === 'mrp' || innerKey === 'cost')) {
        setProductInfo((prevInfo) => ({
          ...prevInfo,
          [outerKey]: {
            ...prevInfo[outerKey],
            [innerKey]: parseFloat(value), 
          },
        }));
      } else {
        setProductInfo((prevInfo) => ({
          ...prevInfo,
          [outerKey]: {
            ...prevInfo[outerKey],
            [innerKey]: value,
          },
        }));
      }
    } else {
      setProductInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
    
  };
  
  const handleAddProduct = () => {
        dispatch(addProduct(productInfo))
          setProductInfo({
            id: '',
            url: '',
            detailUrl: '',
            title: {
              shortTitle: '',
              longTitle: '',
            },
            price: {
              mrp: 0,
              cost: 0,
              discount: '0%',
            },
            quantity: 0,
            description: '',
            discount: '',
            tagline: '',
          });
          handleClose();
          setDetailImage('')
          setImage('')
    
  };

  return (
    <div>
      <Button style={{background: 'purple', color:'white', bottom:4}} onClick={handleOpen}>Add Product</Button>
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
            Add Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField
            label="Short Title"
            name="title.shortTitle"
            value={productInfo.title.shortTitle}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Long Title"
            name="title.longTitle"
            value={productInfo.title.longTitle}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Description"
            name="description"
            value={productInfo.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Quantity"
            name="quantity"
            value={productInfo.quantity}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          

            {/* <TextField
            label="ID"
            name="id"
            value={productInfo.id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          /> */}

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="category"
            value={productInfo.category}
            label="category"
            onChange={handleInputChange}
          >
            <MenuItem value={'Deal of the Day'}>Deal of the Day</MenuItem>
            <MenuItem value={'Discount for you'}>Discount for you</MenuItem>
            <MenuItem value={'top selection'}>top selection</MenuItem>
            <MenuItem value={'Trending'}>Trending</MenuItem>
          </Select>
        </FormControl>
          
          
          
          <TextField
            label="Cost"
            name="price.cost"
            value={productInfo.price.cost}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          

            </Grid>

            <Grid item xs={6}>

            <TextField
            label="MRP"
            name="price.mrp"
            value={productInfo.price.mrp}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
            <TextField
            label="Discount Percent"
            name="price.discount"
            value={productInfo.price.discount}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          
          <TextField
            label="Discount"
            name="discount"
            value={productInfo.discount}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tagline"
            name="tagline"
            value={productInfo.tagline}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          {/* <TextField
            label="URL"
            name="url"
            value={productInfo.url}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Detail URL"
            name="detailUrl"
            value={productInfo.detailUrl}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          /> */}

          <Box marginBottom='10px' marginTop='10px' display='flex' justifyContent='space-between' alignItems='center'>
            <Typography>Picture</Typography>
            <Box alignItems='center'>
            <label for='img'>
              <IconButton component="span">
                <AttachFileIcon />
              </IconButton>
            </label>
            <img style={{marginLeft:8, width: 30, height:30}} src={image} alt='preview'/>
              <input
                type="file"
                id='img'
                accept="image/*"
                name="url"
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />
            </Box>
                    
                    
          </Box>

          <Box top="10px" display='flex'  justifyContent='space-between' alignItems='center'>
            <Typography>Detail Pic</Typography>
            <Box alignItems='center' justifyContent='center'>
            <label for='detailimg'>
              <IconButton component="span">
                <AttachFileIcon />
              </IconButton>
            </label>
            <img style={{marginLeft:8, width: 30, height:30, top:4}} src={detailImage} alt='preview'/>
              <input
                type="file"
                id='detailimg'
                accept="image/*"
                name="detailUrl"
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />
            </Box>
                    
                    
          </Box>
          
          

            </Grid>

          </Grid>
          <Button style={{width:'60%', background: 'purple', color:'white', left:'20%' }} onClick={handleAddProduct}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NewProductModel;
