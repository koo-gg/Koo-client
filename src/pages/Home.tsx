import { Outlet, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  return (
    <div className="flex h-screen items-center justify-center">
      <Outlet />
      {code}
    </div>
  );
};

export default Home;
