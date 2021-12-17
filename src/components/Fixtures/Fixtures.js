import classes from './Fixtures.module.css';
import Card from '../ui/Card';

function Fixtures(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
          <div className={classes.content}>
            <tr>{props.when}</tr>
            <tr>{props.home} vs {props.away} {props.time}</tr>
           
          </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Fixtures;
  