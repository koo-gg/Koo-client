import DiscordLogin from './components/buttons/DiscordLogin';

const App = () => {
  console.log(process.env.REACT_APP_DISCORD_OAUTH2_URL);
  return (
    <div className="flex h-screen items-center justify-center">
      <DiscordLogin />
    </div>
  );
};

export default App;
