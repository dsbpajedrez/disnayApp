
import {useState} from 'react'
import LayOut from './LayuOut/LayOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { credential } from './credentials/Credentials'; 
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SaveUser from './components/ContextUser/ContextUser';
const auth = getAuth(credential)

function App() {
  const [user, setUser]= useState(null)
  onAuthStateChanged(auth,(usuarioFireBase)=>{
    if(usuarioFireBase){
      setUser(usuarioFireBase)
    }else{
      setUser(null)
    }
  })
 
  return (
<BrowserRouter>
  <LayOut> 
    <SaveUser>
    <Header/>
    <Routes>
      <Route path='/*' element={user? <Home/>:<Login/>}/>
      <Route path='/register/*' element={user? <Home/>:<Register/>}/>
    </Routes>
    </SaveUser> 
    
      
  </LayOut>
</BrowserRouter>
  );
}

export default App;
