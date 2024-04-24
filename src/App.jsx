import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import Main from '@/pages/main';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
