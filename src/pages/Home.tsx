import { Outlet, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-default">
      <Outlet />
      <p className="text-white">{code}</p>
    </div>
  );
};

export default Home;
