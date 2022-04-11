import TopScorers from "../components/TopScorer/topscorers";
import TopAssists from "../components/TopAssists/TopAssists";
import TopYellows from "../components/TopYellows/TopYellows";
import TopReds from "../components/TopReds/TopReds";
import classes from "./Stats.module.css";
import { useState, useEffect } from "react";




function Stats() {

    const [ scorers, setScorers ]  = useState([ ]);
    const [ assists, setAssists ]  = useState([ ]);
    const [ yellows, setYellows ]  = useState([ ]);    
    const [ reds, setReds ]  = useState([ ]);

    useEffect (() => {
        fetch("https://v3.football.api-sports.io/players/topscorers?league=39&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
            }
        })
        .then((response) => response.json().then(async (data) =>{
            var topscorers = await data['response'];
            console.log(topscorers);
            let list = [];
            for ( let row in topscorers){
                list.push({
                    name: topscorers[row].player.name,
                    team: topscorers[row].statistics[0].team.name,
                    goals: topscorers[row].statistics[0].goals.total
                })
            }
            setScorers(list);
        }))
        .catch(err => {
            console.log(err);
        })
    },[]);

    useEffect ( () => {
    fetch("https://v3.football.api-sports.io/players/topassists?league=39&season=2021", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
        }
    })
    .then(response => response.json().then(async (data) =>{
        var topassists = await data['response'];
        console.log(topassists);
        let list = [];
        for ( let row in topassists){
            list.push({
                name: topassists[row].player.name,
                team: topassists[row].statistics[0].team.name,
                assists: topassists[row].statistics[0].goals.assists
            })
        }
        setAssists(list);
        }))
    .catch(err => {
        console.log(err);
    })
    },[]);

    useEffect ( () => {
        fetch("https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
            }
        })
        .then(response => response.json().then(async (data) =>{
            var topyellows = await data['response'];
            console.log(topyellows);
            let list = [];
            for ( let row in topyellows){
                list.push({
                    name: topyellows[row].player.name,
                    team: topyellows[row].statistics[0].team.name,
                    yellows: topyellows[row].statistics[0].cards.yellow
                })
            }
            setYellows(list);
        }))
        .catch(err => {
            console.log(err);
        })
    },[]);

   
    useEffect ( () => {
        fetch("https://v3.football.api-sports.io/players/topredcards?league=39&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "170391d552ed0dfe7af81eedc820e370"
            }
        })
        .then(response => response.json().then(async (data) =>{
            var topreds = await data['response'];
            console.log(topreds);
            let list = [];
            for ( let row in topreds){
                list.push({
                    name: topreds[row].player.name,
                    team: topreds[row].statistics[0].team.name,
                    yellowreds: topreds[row].statistics[0].cards.yellowred,
                    reds: topreds[row].statistics[0].cards.red
                })
            }
            setReds(list);
        }))
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>Top Scorer</h1>          
            <TopScorers scorers={scorers} /> 
            <h1 className={classes.heading}>Top Assists</h1>          
            <TopAssists assists={assists} />
            <h1 className={classes.heading}>Top Yellow Cards</h1>          
            <TopYellows yellows={yellows} /> 
            <h1 className={classes.heading}>Top Red Cards</h1>          
            <TopReds reds={reds} />            
 
        </div>
    ); 
}
export default Stats;