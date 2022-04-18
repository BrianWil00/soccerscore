import React, { useState, useEffect, useContext } from "react";
import classes from "./MyTeams.module.css";
import { UserContext } from "../contexts/UserContext";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Card from '../components/ui/Card'

import Results from "../components/Results/Results";
import Fixtures from "../components/Fixtures/Fixtures";
import Players from "../components/Players/Players";

function MyTeams() {
  const history = useHistory();
  const [ fixtures, setFixtures ] = useState([ ]);
  const [ players, setPlayers ] = useState([ ]);
  const [ results, setResults ] = useState([ ]);

  const  UserData = useContext(UserContext);

  if(UserData.UserData == null){
    history.push("/Login");
    window.location.reload(false);
  }

  console.log(UserData.UserData.team);
  const teamID = UserData.UserData.team;
  let text = null;

  switch (teamID) {
    case '42':
      text = "Arsenal";
      break;
    case '66':
      text = "Aston Villa";
      break;
    case '55':
      text = "Brentford";
      break;
    case '51':
      text = "Brighton and Hove Albion";
      break;
    case '44':
      text = "Burnley";
      break;
    case '49':
      text = "Chelsea";
      break;
    case '52':
      text = "Crystal Palace";
      break;
    case '45':
      text = "Everton";
      break;
    case '63':
      text = "Leeds United";
      break;
    case '46':
      text = "Leicester City";
      break;
    case '40':
      text = "Liverpool";
      break;
    case '50':
      text = "Manchester City";
      break;
    case '33':
      text = "Manchester United";
      break;
    case '34':
      text = "Newcastle United";
      break;
    case '71': 
      text = "Norwich City";
      break;
    case '41':
      text = "Southampton";
      break;
    case '47':
      text = "Tottenham Hotspur";
      break;
    case '38':
      text = "Watford";
      break;
    case '48':
      text = "West hame United";
      break;
    case '39':
      text = "Wolverhampton Wanderers";
      break;
  }

  useEffect ( () => {
    fetch(" https://v3.football.api-sports.io/fixtures?league=39&season=2021&team=" + teamID, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
        }
    })
    .then(response => response.json().then(async (data) =>{
        var fixtures = await data['response'];
        console.log(fixtures);
        let fixturesList = [];
        let resultsList = [];
        for ( let row in fixtures ){
            if ( fixtures[row].fixture.status.short == 'FT'){
                resultsList.push({
                    when: fixtures[row].fixture.date,
                    home: fixtures[row].teams.home.name,
                    away: fixtures[row].teams.away.name,
                    homescore: fixtures[row].score.fulltime.home,
                    awayscore: fixtures[row].score.fulltime.away
                })
            }
            else {
                fixturesList.push({
                    when: fixtures[row].fixture.date,
                    where: fixtures[row].fixture.venue.name,
                    home: fixtures[row].teams.home.name,
                    away: fixtures[row].teams.away.name
                })
            }
        }
        setFixtures(fixturesList);
        setResults(resultsList);
    }))
    .catch(err => {
    console.log(err);
    })
},[]);

useEffect ( () => {
  fetch("https://v3.football.api-sports.io/players/squads?team=" + teamID, {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
      }
  })
  .then(response => response.json().then(async (data) =>{
      var profile = await data['response']['0']['players'];
      console.log(profile);
      let list = [];
      for ( let row in profile ){
          list.push({
              number: profile[row].number,
              name: profile[row].name,
              age: profile[row].age,
              position: profile[row].position
          })
      }
      setPlayers(list);
  }))
  .catch(err => {
  console.log(err);
  })
},[]);

function Logout() {
  window.location.reload(false);
  return null;
}

  return(
    <div className={classes.mainDiv}>  
    <Card>
      <div className= {classes.content}>
        <h1>This page shows you {text}'s Fixtures , Results and Player list </h1>
            <div className={classes.actions}>
              <button onClick={Logout}>Log Out</button>
            </div>
          </div>
    </Card>
    <h1 className={classes.heading}>{text}'s Fixtures</h1>          
    <Fixtures fixtures={fixtures} />
    <h1 className={classes.heading}>{text}'s Results</h1>          
    <Results results={results} />
    <h1 className={classes.heading}>{text} Players</h1>          
    <Players players={players} />
  </div>
  );
}
export default MyTeams;