import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Home = (props) => {
    const { strSport, strLeague  } = props.league;



    return (
        
        <div className='col-md-3 card' >
            <h3>{strLeague}</h3>
            <p>SportType : {strSport}</p>
            <Link to="/leagueInfo">
                <button id='explore-btn'>Explore  <FontAwesomeIcon icon={faArrowRight} /> </button>
            </Link>
        </div>
    );
};

export default Home;