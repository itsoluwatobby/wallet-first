import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import { useAppContext } from './hooks/useAppContext';

function App() {
  const { theme } = useAppContext();

  return (
    <main className={`${theme !== 'light' ? 'bg-white' : 'dark:bg-slate-950 text-white'} w-full h-screen flex transition-colors`}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  );
}
export default App
