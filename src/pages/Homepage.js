import React from 'react'
import Standings from "../components/Standings/Standings";
import classes from "./MainPage.module.css";
import { useState, useEffect } from "react";

export default function Homepage() {

    const [ standings, setStandings ]  = useState([ ]);

    //get premier league standings from the API 
    useEffect ( () => {
        fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
            }
        })
        .then(response => response.json().then(async (data) =>{
            var table = await data['response']['0']['league']['standings']['0'];
            console.log(table);
            let list = [];
            for ( let row in table ){
                list.push({
                    rank: table[row].rank,
                    team: table[row].team.name,
                    points: table[row].points,
                    goalsDiff: table[row].goalsDiff,
                    played: table[row].all.played
                })
            }
            setStandings(list);
        }))
        .catch(err => {
            console.log(err);
        })
    },[]);

  return (
    
    <div className={classes.mainDiv}>
    <h1 className={classes.heading}>Welcome to SoccerScore</h1>
    <p className={classes.heading}>This site contains information regarding the English Premier league</p>       
    <Standings standings={standings} />
    </div>
  )
}
