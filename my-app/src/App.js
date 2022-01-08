
import './App.css';
import   {Header} from './components/Header.js';
import  ViewMovie,{ShowMovies} from './components/Movie.js';


function App() {
  return (
    <div className="App">
     <Header/>
  
     {/* <ViewMovie/> */}
     <ShowMovies/>
    </div>
  );
}

export default App;
