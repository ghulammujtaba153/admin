import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { gettingUsers } from '../../Redux/actions/userAction';
import { useEffect } from 'react';
import Loader from '../loader/loader';

const columns = [
  { field: '_id', headerName: 'ID', width: 250 },
  { field: 'firstname', headerName: 'First name', width: 180 },
  { field: 'lastname', headerName: 'Last name', width: 180 },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'phone', headerName: 'Phone', width: 180 },
];


export default function UserTable() {
  const [rows, setRows] = React.useState(null);
  const [loading, setLoading]=React.useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await gettingUsers();
        
        setRows(users);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? <Loader/> 
      :
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          
        />
        </div>
      </div>
}
    </>
    
  );
}