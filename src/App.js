import './App.css';
import Home from './components/page/home';

function App() {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [data, setData] = useState(null);
  // const [btnState, setBtnState] = useState(false);
  
  // useEffect(() => {
  //   fetch('/api').then(res => res.json())
  //   .then((result) => {
  //     setIsLoaded(true);
  //     setData(result.message);
  //   },
  //    (error) => {
  //     setIsLoaded(false);
  //     setError(error);
  //   });
  // }, []);

  // function reqData(){
  //    setBtnState(true);
  // }

  return (
    <Home />
  );
}

export default App;
