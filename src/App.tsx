import { FaDiscord } from 'react-icons/fa';

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="m-4 flex items-center gap-2 rounded-sm bg-[#7289da] p-2 text-white transition-all duration-300 ease-in-out hover:bg-black">
        <FaDiscord size={20} />
        Login with Discord
      </button>
    </div>
  );
};

export default App;
