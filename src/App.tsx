
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { AdminProvider } from '@/contexts/AdminContext';

import './App.css';

function App() {
  return (
    <AdminProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </AdminProvider>
  );
}

export default App;
