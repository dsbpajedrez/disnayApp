
import './App.css';
import LayOut from './LayuOut/LayOut';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
<LayOut>
  <Header/>
  <Main/>
  <Footer/>
</LayOut>
  );
}

export default App;
