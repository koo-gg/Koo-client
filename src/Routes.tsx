import { Routes, Route, Navigate } from 'react-router-dom';
import Detail from './pages/Detail';
import GuildList from './pages/guild/List';
import GuildDetail from './pages/guild/Detail';
import Home from './pages/Home';

const _Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="guild">
        <Route path="list" element={<GuildList />} />
        <Route path="detail" element={<GuildDetail />} />
      </Route>
      <Route path="detail" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default _Routes;
