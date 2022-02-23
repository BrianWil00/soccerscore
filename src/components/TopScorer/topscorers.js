import classes from './topscorers.module.css';
import Card from '../ui/Card';

function TopScorers(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
          <div className={classes.content}>
            <table className={classes.table}>
                <thead>
                    <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Goals</th>
                    </tr>
                </thead>
                <tbody id="Scorers"></tbody>
                  {props.scorers.map(scorer => (
                    <tr>
                      <th>{scorer.name}</th>
                      <th>{scorer.team}</th>
                      <th>{scorer.goals}</th>
                    </tr>
                  ))}
            </table>
          </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default TopScorers;