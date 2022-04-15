import Fixtures from "../components/Fixtures/Fixtures";
import Results from "../components/Results/Results";
import classes from "./MainPage.module.css";
import { useState, useEffect } from "react";

function MainPage() {

    const [ fixtures, setFixtures ] = useState([ ]);
    const [ results, setResults ] = useState([ ]);

    //get fixtures and results of premier league games 
    useEffect ( () => {
        fetch(" https://v3.football.api-sports.io/fixtures?league=39&season=2021", {
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

    return (
        
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>Fixtures</h1>          
            <Fixtures fixtures={fixtures} />
            <h1 className={classes.heading}>Results</h1>          
            <Results results={results} />
        </div>
    );
}
export default MainPage;