import { useNavigate, useSearchParams, Outlet } from 'react-router-dom';
import DiscordLogin from '../components/buttons/DiscordLogin';

const Home = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-default">
      <Outlet />
      <DiscordLogin />
      <p className="text-white">{code}</p>
      <button
        className="m-4 flex items-center gap-2 rounded-sm bg-discrod p-2 text-white transition-all duration-300 ease-in-out media-hover:hover:bg-black"
        onClick={() => navigate('/guild/list')}
      >
        go to guild list
      </button>

      <button
        className="m-4 flex items-center gap-2 rounded-sm bg-discrod p-2 text-white transition-all duration-300 ease-in-out media-hover:hover:bg-black"
        onClick={() => navigate('/guild/detail')}
      >
        go to guild detail
      </button>
    </div>
  );
};

export default Home;
