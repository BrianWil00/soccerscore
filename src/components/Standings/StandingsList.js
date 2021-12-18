import classes from './StandingsList.module.css';
import Standings from './Standings';

function StandingsList(props) {
  return (
    <ul className={classes.list}>
      {props.standings.map(standing => (
        <Standings
          rank1={standing.rank1}
          team1={standing.team1}
          points1={standing.points1}
          goalDifference1={standing.goalDifference1}
          rank2={standing.rank2}
          team2={standing.team2}
          points2={standing.points2}
          goalDifference2={standing.goalDifference2}
          rank3={standing.rank3}
          team3={standing.team3}
          points3={standing.points3}
          goalDifference3={standing.goalDifference3}
          rank4={standing.rank4}
          team4={standing.team4}
          points4={standing.points4}
          goalDifference4={standing.goalDifference4}
        />
      ))}
    </ul>
  );
}

export default StandingsList;