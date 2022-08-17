
import './App.css';
import LayOut from './LayuOut/LayOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
  <LayOut>  
    <Header/>
    <Home/>  
  </LayOut>
</BrowserRouter>
  );
}

export default App;
