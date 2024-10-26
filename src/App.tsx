import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import { useAppContext } from './hooks/useAppContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useAppContext();

  return (
    <main className={`page-fade-in ${theme !== 'light' ? 'bg-white' : 'dark:bg-slate-950 text-white'} w-full h-screen flex transition-colors`}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>

      <Toaster 
        toastOptions={{
          style: {
            borderRadius: '8px',
            color: '#222',
            padding: '16px',
            fontSize: '14px',
          },
        }}
      />
    
    </main>
  );
}
export default App
