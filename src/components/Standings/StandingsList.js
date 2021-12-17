import classes from './StandingsList.module.css';
import Standings from './Standings';

function StandingsList(props) {
  return (
    <ul className={classes.list}>
      {props.standings.map(standing => (
        <Standings
          rank={standing.rank}
          team={standing.team}
          points={standing.points}
          goalDifference={standing.goalDifference}
        />
      ))}
    </ul>
  );
}

export default StandingsList;