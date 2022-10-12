import Header from './Header';
import Home from './Home'
import './App.css';
import { Routes ,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Payment from './Payment'
import Login from './Login';
import { useEffect ,useContext } from 'react';
import { auth } from './FirebaseConfig'
import BasketContext from './BasketContext'
function App() {
  const basketCtx=useContext(BasketContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      
      if(authUser){
        console.log(authUser)
        basketCtx.setUser(authUser)
      }
      else{
        basketCtx.setUser(null)
      }
    })
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    </div>
  );
}

export default App;
