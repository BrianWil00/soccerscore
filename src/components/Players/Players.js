import classes from './Players.module.css';
import Card from '../ui/Card';

function Players(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
            <div className={classes.content}>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Number</th>
                    </tr>
                </thead>
                <tbody id="Players">
                {props.players.map(player => (
                    <tr>
                      <th>{player.name}</th>
                      <th>{player.age}</th>
                      <th>{player.position}</th>
                      <th>{player.number}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Players;
  