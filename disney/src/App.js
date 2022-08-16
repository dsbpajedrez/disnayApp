
import './App.css';
import LayOut from './LayuOut/LayOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
<LayOut>
  <Header/>
  <Home/>
  <Footer/>
</LayOut>
  );
}

export default App;
