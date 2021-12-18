import StandingsList from "../components/Standings/StandingsList";
import FixturesList from "../components/Fixtures/FixturesList";
import ResultsList from "../components/Results/ResultsList";
import classes from "./MainPage.module.css";


function MainPage() {


    //Function to get premier league standings from the API 
    /*function GetStandingsData() {
        fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "v3.football.api-sports.io",
		    "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
	    }
        })
        .then(response => response.json().then(data =>{
            var table = data['response']['0']['league']['standings']['0'];
            return table;
        }))
        .catch(err => {
        console.log(err);
        })
    }*/

    //Fucntion to get premier league fixtures and results from the API
    /*function getFixtures() {
        fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2021", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
	        }
        })
        .then(response => response.json().then(data =>{
	        console.log(data);
            fixtures = data;
            var fixtures = {data}
        }))
        .catch(err => {
	        console.log(err);
        });
    }*/

    const Table = { 
        rank1: '1',
        team1: 'Manchester City',
        points1: '41',
        goalDifference1:'31',
        rank2: '2',
        team2: 'Liverpool',
        points2: '40',
        goalDifference2:'35',
        rank3: '3',
        team3: 'Chelsea',
        points3: '37',
        goalDifference3:'27',
        rank4: '4',
        team4: 'Arsenal',
        points4: '32',
        goalDifference4:'4'
    };

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

    const standings = [
        {...Table},
    ];

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
            <StandingsList standings={standings} />
            <h1 className={classes.heading}>Fixtures</h1>          
            <FixturesList fixtures={fixtures} />
            <h1 className={classes.heading}>Results</h1>          
            <ResultsList results={results} />
        </div>
    );
}
export default MainPage;