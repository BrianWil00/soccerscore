import classes from './StandingsList.module.css';
import Standings from './Standings';

function StandingsList(props) {
  return (
    <ul className={classes.list}>
      {props.standings.map(standing => (
        <Standings
          rank1={standing.rank}
          team1={standing.team}
          points1={standing.points}
          goalDifference1={standing.goalDifference}
        />
      ))}
    </ul>

  );
}

export default StandingsList;