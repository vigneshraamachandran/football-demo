import { Route , Routes ,Link } from 'react-router-dom';
import './App.css';
import Home from './home';
import './players.css';
// import Cards from './cards';
import Matches from './Matches';
import League from './league';
export default function App() {
  return (
    <div className="App">
              <div className="mainhead">
        <ul > 
            <li ><Link className='f1' to="/">Players</Link></li>
            <li ><Link className='f1'to="/matches">Matches</Link></li>
            <li ><Link className='f1'to="/league">Leages</Link></li>
        </ul>
        </div>
            <Routes>
               <Route path="/matches" element={<Matches/>}/>
               <Route path="/league" element={<League/>}/> 
               <Route path="/" element={<Home/>}/>
            </Routes>
        <div></div>
      </div>
  );
}


