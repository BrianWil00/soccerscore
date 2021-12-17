import StandingsList from "../components/Standings/StandingsList";
import FixturesList from "../components/Fixtures/FixturesList";
import ResultsList from "../components/Results/ResultsList";
import classes from "./MainPage.module.css";


function MainPage() {

    const ManchesterUnited = { 
        rank: '1',
        team: 'Manchester United',
        points: '100',
        goalDifference: '10'
    };

    const Fixtures = {
        home: 'Manchester United',
        away: 'Manchester City',
        when: '20th of December 2021',
        time: '15:00'
    };

    const Results = {
        home: 'Manchester Utd',
        away: 'Manchester City',
        score: '3 - 1',
        time: '65:31'
    };


    const standings = [ 
        {...ManchesterUnited}
    ];

    const fixtures = [
        {...Fixtures}
    ];

    const results = [
        {...Results}
    ];
    
    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>Standings</h1>          
            <StandingsList standings={standings} />
            <h1 className={classes.heading}>Fixtures</h1>          
            <FixturesList fixtures={fixtures} />
            <h1 className={classes.heading}>Results</h1>          
            <ResultsList results={results} />
        </div>
    );
}
export default MainPage;