import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '@/src/pages/Dashboard.tsx';
import { LoginPages } from '@/src/pages/LoginPages.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<LoginPages />} />
          </Routes>
          <ToastContainer closeOnClick />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
