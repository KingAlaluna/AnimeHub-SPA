function MainLogic() {
  //хуки
  const [isDisplay, setIsDisplay] = useState('Main');
  const [isDarkTheme, setIsDarkTheme] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  const [isActBtn, setIsActBtn] = useState('fa-home');
  
  //аніме
  const [isAnimeData, setIsAnimeData] = useState([]);
  const [isAnimeUrl, setIsAnimeUrl] = useState('https://api.jikan.moe/v4/anime');
  const [isActAnimeType, setIsActAnimeType] = useState('');
  const [isActAnimeYear, setIsActAnimeYear] = useState('');
  const [isActAnimeType2, setIsActAnimeType2] = useState(false);
  const [isActAnimeYear2, setIsActAnimeYear2] = useState(false);
  const [isAnimeFavourite, setIsAnimeFavourite] = useState(JSON.parse(localStorage.getItem('my_anime_favs')) || []);
  
  
  const [isCurrCharacter, setIsCurrCharacter] = useState(null);
  const [isCurrActors, setIsCurrActors] = useState(null);
  
  const [isInputSearshAc, setIsInputSearshAc] = useState(false);
  
  //пагінація
  const [isPaginDocument, setIsPaginDocument] = useState(1);
  const [isAllPaginDocument, setIsAllPaginDocument] = useState(1);
  
  
  
  //зміна теми
  useEffect(() => {
    document.documentElement.dataset.theme = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme]);
  
  
  //обробник системноі кнопки назад
  useEffect(() => {
    window.onpopstate = function(event) {
      setIsDisplay('Main');
    };
  }, []);
  
  
  
  
  //дисплеи
  let display = {
    Main,
    Filter,
    Favourite,
    MyProjects,
    AboutMe,
    AnimeViewing,
    InfoCharacters,
    InfoActors,
    AnimeSearch,
  };
  
  const Displays = display[isDisplay];
  
  
  //глобальная видимость
  let allState = {
    Displays,
    isDisplay,
    setIsDisplay,
    isDarkTheme,
    setIsDarkTheme,
    isActBtn,
    setIsActBtn,
    
    
    isAnimeData,
    setIsAnimeData,
    isAnimeUrl,
    setIsAnimeUrl,
    isInputSearshAc,
    setIsInputSearshAc,
    
    isActAnimeType,
    setIsActAnimeType,
    isActAnimeYear,
    setIsActAnimeYear,
    
    isActAnimeType2,
    setIsActAnimeType2,
    isActAnimeYear2,
    setIsActAnimeYear2,
    
    isAnimeFavourite,
    setIsAnimeFavourite,
    
    
    isCurrCharacter,
    setIsCurrCharacter,
    isCurrActors,
    setIsCurrActors,
    
    
    //пагінація
    isPaginDocument,
    setIsPaginDocument,
    isAllPaginDocument,
    setIsAllPaginDocument,
  };

  return e(GlobalContext.Provider, { value: allState }, e(TopBanner), e(Weblite), e(BottomBanner));
}


const weblites = ReactDOM.createRoot(document.getElementById('weblite'));
weblites.render(e(MainLogic));