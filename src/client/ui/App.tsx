import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Store from './components/Store';
import Rules from './components/Rules';
import Lobby from './components/Lobby';
import Home from './components/Home';
import Layout from './components/Layout';
import GameLobby from './components/GameLobby'
import {useEffect,useState} from 'react'


export default function App() {
  const [login,setLogin] = useState(false)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLogin(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lobby" element={<Lobby />}/>
          <Route path="/room/:roomId" element={<GameLobby />} />
          <Route path="rules" element={<Rules />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </Router>
  )
}



