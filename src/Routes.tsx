import { Routes, Route, Navigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

const _Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

export default _Routes;
