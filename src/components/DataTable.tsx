import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import SignUpFormDialog from './form/sign-up-form';

//mockData
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export interface User {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmpassword?: string;
  deleted?: boolean;
}

export interface DataTableProps {
  users: User[];
}

export default function DataTable(props: DataTableProps) {
  const [open, setOpenSignUp] = React.useState(false);
  const [users, setUsers] = React.useState<User[]>([]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              await deleteUser(params.row._id);
            }} // Pass the row data
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://192.168.0.88:4000/users');

      if (res && res.data) {
        setUsers(res.data.map((user: User) => ({ ...user, id: user._id })));
      }
    } catch (error) {
      console.log('[Error]: ', error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const res = await axios.delete(`http://192.168.0.88:4000/users/${id}`);
      if (res) {
        fetchUsers();
      }
    } catch (error) {
      console.log('[Error]: ', error);
    }
  };

  const addUser = async (user: User) => {
    try {
      const userPayload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      };
      const res = await axios.post('http://192.168.0.88:4000/users', userPayload);

      if (res && res.data) {
        fetchUsers();
        setOpenSignUp(false);
      }
    } catch (error) {
      console.log('[Error]:', error);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="flex flex-row space-x-2 justify-end">
        <Button variant="contained" color="primary" size="small" onClick={() => setOpenSignUp(true)}>
          Sign Up
        </Button>
        <Button variant="contained" color="primary" size="small">
          Export
        </Button>
      </div>

      <Paper sx={{ height: 400, width: '100%', padding: 2 }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      <SignUpFormDialog open={open} handleAddUser={addUser} setOpenSignUp={setOpenSignUp} />
    </>
  );
}
