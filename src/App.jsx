import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import Main from '@/pages/main';
// 한의원 소개
import Gree from '@/pages/company/gree';
import Career from '@/pages/company/career';
import Direction from '@/pages/company/direction';
// 교통사고 클리닉
import Sub0101 from '@/pages/sub01/01';
import Sub0102 from '@/pages/sub01/02';
import Sub0103 from '@/pages/sub01/03';
import Sub0104 from '@/pages/sub01/04';
// 통증
import Sub0201 from '@/pages/sub02/01';
import Sub0202 from '@/pages/sub02/02';
// 어린이 클리닉
import Sub0301 from '@/pages/sub03/01';
import Sub0302 from '@/pages/sub03/02';
import Sub0303 from '@/pages/sub03/03';
import Sub0304 from '@/pages/sub03/04';
import Sub0305 from '@/pages/sub03/05';
import Sub0306 from '@/pages/sub03/06';
import Sub0307 from '@/pages/sub03/07';
import Sub0308 from '@/pages/sub03/08';
import Sub0309 from '@/pages/sub03/09';
// 여성 클리닉
import Sub0401 from '@/pages/sub04/01';
import Sub0402 from '@/pages/sub04/02';
import Sub0403 from '@/pages/sub04/03';
import Sub0404 from '@/pages/sub04/04';
import Sub0405 from '@/pages/sub04/05';
import Sub0406 from '@/pages/sub04/06';
// 비만 클리닉
import Sub05 from '@/pages/sub05';
// 자주묻는질문
import Faq from '@/pages/faq';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/gree" element={<Gree />} />
        <Route path="/career" element={<Career />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/sub01-01" element={<Sub0101 />} />
        <Route path="/sub01-02" element={<Sub0102 />} />
        <Route path="/sub01-03" element={<Sub0103 />} />
        <Route path="/sub01-04" element={<Sub0104 />} />
        <Route path="/sub02-01" element={<Sub0201 />} />
        <Route path="/sub02-02" element={<Sub0202 />} />
        <Route path="//sub03-01" element={<Sub0301 />} />
        <Route path="//sub03-02" element={<Sub0302 />} />
        <Route path="//sub03-03" element={<Sub0303 />} />
        <Route path="//sub03-04" element={<Sub0304 />} />
        <Route path="//sub03-05" element={<Sub0305 />} />
        <Route path="//sub03-06" element={<Sub0306 />} />
        <Route path="//sub03-07" element={<Sub0307 />} />
        <Route path="//sub03-08" element={<Sub0308 />} />
        <Route path="//sub03-09" element={<Sub0309 />} />
        <Route path="/sub04-01" element={<Sub0401 />} />
        <Route path="/sub04-02" element={<Sub0402 />} />
        <Route path="/sub04-03" element={<Sub0403 />} />
        <Route path="/sub04-04" element={<Sub0404 />} />
        <Route path="/sub04-05" element={<Sub0405 />} />
        <Route path="/sub04-06" element={<Sub0406 />} />
        <Route path="/sub05" element={<Sub05 />} />
        <Route path="/faq" element={<Faq />} />
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
