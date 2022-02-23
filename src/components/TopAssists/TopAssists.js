import classes from './TopAssists.module.css';
import Card from '../ui/Card';

function TopAssists(props) {
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
                    <th>Assists</th>
                    </tr>
                </thead>
                <tbody id="Scorers"></tbody>
                  {props.assists.map(assist => (
                    <tr>
                      <th>{assist.name}</th>
                      <th>{assist.team}</th>
                      <th>{assist.assists}</th>
                    </tr>
                  ))}
            </table>
          </div>
          </div>  
        </Card>
      </li>
    );
  }
  export default TopAssists;