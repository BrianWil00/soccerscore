import classes from "../pages/MainPage.module.css"


function MainPage() {

    var standingsTable = document.querySelector("#standingsTable");
    
    function getStandings(){
        fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
	        }
        })
        .then(response => response.json().then(data =>{
            var standings = data['response']['0']['league']['standings']['0'];
            console.log(standings);
            for (var i = 0; i<standings.length;i++){
                addTableTile(standings[i]);
            }

        }))
        .catch(err => {
            console.log(err);
        })
    }

    /*function getFixtures() {
        fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2021", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": "c18994576de130f2d09bdd10081775f6"
	        }
        })
        .then(response => response.json().then(data =>{
            var fixtures = {data}
        }))
        .catch(err => {
	        console.log(err);
        });
    }*/
    

    function addTableTile(data){
        var tableTile = document.createElement('table')
        //tableTile.classList.add("table-Tile");

        var Rank = document.createElement('thread');
        //Rank.classList.add("team");
        var ranking = document.createElement('th');
        ranking.innerHTML = data['rank'] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        Rank.appendChild(ranking); 

        var Team = document.createElement('thread');
        //Team.classList.add("team");
        var teamTileName = document.createElement('th');
        teamTileName.innerHTML = data['team']['name']  + "&nbsp;&nbsp;&nbsp;&nbsp;";
        Team.appendChild(teamTileName);

        var Points = document.createElement('thread');
        //Points.classList.add("team");
        var pointsTileName = document.createElement('th');
        pointsTileName.innerHTML = data['points']  + "&nbsp;&nbsp;&nbsp;&nbsp;";
        Points.appendChild(pointsTileName);

        var GoalsDifference = document.createElement('thread');
        //GoalsDifference.classList.add("team");
        var goalsTileName = document.createElement('th');
        goalsTileName.innerHTML = data['goalsDiff']  + "&nbsp;&nbsp;&nbsp;&nbsp;";
        GoalsDifference.appendChild(goalsTileName);

        tableTile.appendChild(Rank);
        tableTile.appendChild(Team);
        tableTile.appendChild(Points);
        tableTile.appendChild(GoalsDifference);

        standingsTable.appendChild(tableTile);
       
    }

    getStandings();

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
            <h2>Premier League Table</h2>
            <table>
                <thead>
                    <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Goal Diff</th>
                    </tr>
                </thead>
            </table>

            <div id = "standingsTable" className="standings-table"> </div>

        </div>

        
    );
}
export default MainPage;