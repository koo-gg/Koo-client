import { Routes, Route, Navigate } from 'react-router-dom';
import DiscordLogin from './components/buttons/DiscordLogin';
import Detail from './pages/Detail';
import Home from './pages/Home';

const _Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<DiscordLogin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default _Routes;
