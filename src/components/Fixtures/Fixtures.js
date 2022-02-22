import classes from './Fixtures.module.css';
import Card from '../ui/Card';

function Fixtures(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
            <div className={classes.content}>
            <table className={classes.table}>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Home</th>
                    <th>Score</th>
                    <th>Score</th>
                    <th>Away</th>
                    </tr>
                </thead>
                <tbody id="Fixtures"></tbody>
                {props.fixtures.map(fixture => (
                    <tr>
                      <th>{fixture.when}</th>
                      <th>{fixture.where}</th>
                      <th>{fixture.home}</th>
                      <th>{fixture.homescore}</th>
                      <th>{fixture.awayscore}</th>
                      <th>{fixture.away}</th>
                    </tr>
                  ))}
              </table>
            </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Fixtures;
  