import './App.css';
import useGraphDataFetcher from './utils/hooks';
import Alphaa from './components/Alphaa'


function App() {
     const {data, isLoading, isError} = useGraphDataFetcher();
     return (
    <div className="">
     {isLoading && <div>Loading...</div>}
     {isError && <div>Error loading data. Hit refresh to get again.</div>}
     {data && <Alphaa />}
    </div>
  );
}

export default App;
