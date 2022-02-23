//import Standings from "../components/Standings/Standings";
//import Fixtures from "../components/Fixtures/Fixtures";
//import Results from "../components/Results/Results";
//import classes from "./MainPage.module.css";
//import { useState, useEffect } from "react";

function MainPage() {
/*
    //Function to get premier league standings from the API 
    function GetStandingsData() {
        useEffect ( () => {
            fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-host": "v3.football.api-sports.io",
		            "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
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
                        goalsDiff: table[row].goalsDiff
                    })
                }
                setStandings(list);
            }))
            .catch(err => {
                console.log(err);
            })
        })
    }

    function GetFixturesData() {
        useEffect ( () => {
            fetch(" https://v3.football.api-sports.io/fixtures?league=39&season=2021", {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-host": "v3.football.api-sports.io",
		            "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
	            }
            })
            .then(response => response.json().then(async (data) =>{
                var fixtures = await data['response'];
                console.log(fixtures);
                let list = [];
                for ( let row in fixtures ){
                    list.push({
                        when: fixtures[row].fixture.date,
                        where: fixtures[row].fixture.venue.name,
                        home: fixtures[row].teams.home.name,
                        away: fixtures[row].teams.away.name,
                        homescore: fixtures[row].score.fulltime.home,
                        awayscore: fixtures[row].score.fulltime.away
                    })
                }
                setFixtures(list);
            }))
            .catch(err => {
            console.log(err);
            })
        })
    }

    GetStandingsData();
    GetFixturesData();
    
    const [ standings, setStandings ]  = useState([ ]);
    const [ fixtures, setFixtures ] = useState([ ]);
*/   
    return (
        /*
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>Standings</h1>          
            <Standings standings={standings} />
            <h1 className={classes.heading}>Fixtures</h1>          
            <Fixtures fixtures={fixtures} />
        </div>
        */
        <div> This is the main page that will feature League Table, Fixtures and Results </div>
    );
}
export default MainPage;