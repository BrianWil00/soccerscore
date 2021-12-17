import classes from './Standings.module.css';
import Card from '../ui/Card';

function Standings(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
          <div className={classes.content}>
            <table className={classes.table}>
                <thead>
                    <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Goal Diff</th>
                    </tr>
                </thead>
                <tbody id="Standings"></tbody>
                    <tr>
                      <th>{props.rank}</th>
                      <th>{props.team}</th>
                      <th>{props.points}</th>
                      <th>{props.goalDifference}</th>
                    </tr>
            </table>
          </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Standings;
  