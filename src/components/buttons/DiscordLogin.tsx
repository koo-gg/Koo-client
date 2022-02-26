import { FaDiscord } from 'react-icons/fa';

const DiscordLogin = () => {
  return (
    <button
      className="m-4 flex items-center gap-2 rounded-sm bg-discrod p-2 text-white transition-all duration-300 ease-in-out media-hover:hover:bg-black"
      onClick={() => {
        window.location.href = process.env
          .REACT_APP_DISCORD_OAUTH2_URL as string;
      }}
    >
      <FaDiscord size={20} />
      Login with Discord
    </button>
  );
};

export default DiscordLogin;
