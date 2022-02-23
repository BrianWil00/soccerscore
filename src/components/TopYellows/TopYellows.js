import classes from './TopYellows.module.css';
import Card from '../ui/Card';

function TopYellows(props) {
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
                    <th>Yellows</th>
                    </tr>
                </thead>
                <tbody id="Yellows"></tbody>
                  {props.yellows.map(yellow => (
                    <tr>
                      <th>{yellow.name}</th>
                      <th>{yellow.team}</th>
                      <th>{yellow.yellows}</th>
                    </tr>
                  ))}
            </table>
          </div>
          </div>  
        </Card>
      </li>
    );
  }
  export default TopYellows;