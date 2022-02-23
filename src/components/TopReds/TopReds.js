import classes from './TopReds.module.css';
import Card from '../ui/Card';

function TopReds(props) {
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
                    <th>Double Yellows</th>
                    <th>Reds</th>
                    </tr>
                </thead>
                <tbody id="Reds"></tbody>
                  {props.reds.map(red => (
                    <tr>
                      <th>{red.name}</th>
                      <th>{red.team}</th>
                      <th>{red.yellowreds}</th>
                      <th>{red.reds}</th>
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