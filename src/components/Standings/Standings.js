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
                      <th>{props.rank1}</th>
                      <th>{props.team1}</th>
                      <th>{props.points1}</th>
                      <th>{props.goalDifference1}</th>
                    </tr>
                    <tr>
                      <th>{props.rank2}</th>
                      <th>{props.team2}</th>
                      <th>{props.points2}</th>
                      <th>{props.goalDifference2}</th>
                    </tr>
                    <tr>
                      <th>{props.rank3}</th>
                      <th>{props.team3}</th>
                      <th>{props.points3}</th>
                      <th>{props.goalDifference3}</th>
                    </tr>
                    <tr>
                      <th>{props.rank4}</th>
                      <th>{props.team4}</th>
                      <th>{props.points4}</th>
                      <th>{props.goalDifference4}</th>
                    </tr>
            </table>
          </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Standings;
  