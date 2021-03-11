import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import LeagueInfo from './components/leagueInfo/LeagueInfo';



function App() {

  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')

      .then(res => res.json())
      .then(data => setLeagues(data.leagues.slice(0, 15)))



  }, [])


  return (
    <Router>

      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
              
        <Route path="/LeagueInfo">  
              
        </Route>
      </Switch>




      <Header></Header>

      <div className='row'>


        {
          leagues.map(league => <Home league={league} > </Home>)
        }

      </div>
    </Router>
  );
}

export default App;
