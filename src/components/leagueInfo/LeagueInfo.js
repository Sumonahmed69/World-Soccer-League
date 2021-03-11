import React from 'react';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import './LeagueInfo.css';

const LeagueInfo = () => {
const { idLeague } = useParams();
const [leagueInfos , setLeagueInfos] = useState([]);
useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)

      .then(res => res.json())
      .then(data => setLeagueInfos(data.league))
      console.log(leagueInfos)



  }, [])

    return (
        <div>
             <h2> </h2>
        </div>
    );
};

export default LeagueInfo;