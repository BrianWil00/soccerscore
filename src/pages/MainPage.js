import Standings from "../components/Standings/Standings";
import FixturesList from "../components/Fixtures/FixturesList";
import ResultsList from "../components/Results/ResultsList";
import classes from "./MainPage.module.css";
import { useState } from "react";



function MainPage() {


    //Function to get premier league standings from the API 
    function GetStandingsData() {
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
    }

    GetStandingsData();

    // const Table = { 
    //     rank1: table['rank'],
    //     team1: table['team']['name'],
    //     points1: table['points'],
    //     goalDifference1:table['goalsDiff'],
    // };

    const Fixture1 = {
        home: 'Newcastle',
        away: 'Manchester City',
        when: '19th of December 2021',
        time: '14:00'
    };
    const Fixture2 = {
        home: 'Tottenham',
        away: 'Liverpool',
        when: '19th of December 2021',
        time: '16:30'
    };
    const Fixture3 = {
        home: 'Wolves',
        away: 'Chelsea',
        when: '19th of December 2021',
        time: '14:00'
    };
    const Fixture4 = {
        home: 'Liverpool',
        away: 'Leeds',
        when: '26th of December 2021',
        time: '12:30'
    };


    const Result1 = {
        home: 'Leeds',
        away: 'Arsenal',
        score: '1 - 4',
        time: '18th of December 2021'
    };

    const Result2 = {
        home: 'Chelsea',
        away: 'Everton',
        score: '1 - 1',
        time: '16th of December 2021'
    };
    const Result3 = {
        home: 'Liverpool',
        away: 'Newcastle',
        score: '3 - 1',
        time: '16th of December 2021'
    };
    const Result4 = {
        home: 'Brighton',
        away: 'Wolves',
        score: '0 - 1',
        time: '15th of December 2021'
    };

    const [ standings, setStandings ]  = useState([ ]);

    const fixtures = [
        {...Fixture1},
        {...Fixture2},
        {...Fixture3},
        {...Fixture4}
    ];

    const results = [
        {...Result1},
        {...Result2},
        {...Result3},
        {...Result4},
    ];
    
    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>Standings</h1>          
            <Standings standings={standings} />
            <h1 className={classes.heading}>Fixtures</h1>          
            <FixturesList fixtures={fixtures} />
            <h1 className={classes.heading}>Results</h1>          
            <ResultsList results={results} />
        </div>
    );
}
export default MainPage;