const Header = () => {
  return (
    <header className="bg-bgDark flex items-center justify-between container px-6 h-fit">
        <div className="bg-primary">로고</div>
        <div className="bg-bgDark flex justify-between items-center w-44 h-full py-5">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-fit w-9 fill-iconDefalt 
            hover:transition hover:ease-in" viewBox="0 0 20 20">
                    <path
                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" 
                    />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-fit w-9 fill-iconDefalt mr-2.5 hover:drop-shadow-iconHover hover:transition hover:ease-in" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div className="h-14 w-14 bg-bgDark rounded-full flex justify-center items-center shadow-iconEffect hover:shadow-iconHover hover:transition hover:ease-in">
                서버4
            </div>
        </div>
    </header>
  );
};

export default Header;
