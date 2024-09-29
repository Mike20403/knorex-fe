import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DataTable from '../components/DataTable';
import { Button } from '@mui/material';

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <div className="bg-white w-[100vw] h-[100vh]">
        <div className="w-full h-full p-10">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="table-container mt-10">
            <DataTable users={[]} />
          </div>
        </div>
      </div>
    </>
  );
};
