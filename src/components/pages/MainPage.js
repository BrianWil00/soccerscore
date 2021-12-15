import classes from "../pages/MainPage.module.css"


function MainPage() {

    var standings = [];
    var fixtures = [];
  
    function getStandings(){
        fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
	        }
        })
        .then(response => response.json().then(data =>{
            console.log(data);
            standings = data;
        }))
    }

    function getFixtures() {
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
        }))
        .catch(err => {
	        console.log(err);
        });
    }

    return (
        <div className={classes.mainpage}>          
            <h1 className={classes.heading}>
                This page will feauture Fixutes/Results and a Premier League Table
                </h1>
            <h2>
                Fixtures
            </h2>
            <h2>
                Results
            </h2>
            <h2 className={classes.tableheading}>
                Premier League Table 2021/2022 Season
            </h2>
            <table className= {classes.table}>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Points</th>
                        <th>Goal Diff</th>
                    </tr>
                    <tbody id="Standings"></tbody>
                    <div {...getStandings()}></div>
                    <div {...BuildTable()}></div>
                    <div {...getFixtures()}></div>
                </thead>
            </table>
        </div>
    );

    function BuildTable(){
        var table =  document.getElementById("Standings")

        for ( var i = 0; i < standings.length; i++){
            var row = <tr>
                <td>${standings[i].rank}</td>
                <td>${standings[i].team}</td>
                <td>${standings[i].points}</td>
                <td>${standings[i].goalsDiff}</td>
            </tr>
            table.innerHTML += row
        }
    }

}
export default MainPage;