import React, { useState, useEffect} from "react";
import classes from "./Login.module.css";
import Card from '../components/ui/Card'
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState({});
  const [ userinfo, setUserInfo ]  = useState([ ]);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  useEffect ( () => {
    fetch("http://localhost:5000/getUserInfo", {
        "method": "GET",
    })
    .then(response => response.json().then(async (data) =>{
        var userinfo = await data;
        console.log(userinfo);
        let list = [];
        for ( let row in userinfo ){
          list.push({
              username: userinfo[row].username,
              password: userinfo[row].password,
              team: userinfo[row].team
          })
        }
        setUserInfo(list);
    }))
    .catch(err => {
        console.log(err);
    })
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = userinfo.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        history.push("/MyTeams");
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={classes.control}>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
        <div className={classes.actions}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.mainDiv}>
      <h1 className={classes.heading}>Login</h1>     
        <Card>
          {renderForm}
          <div className= {classes.content}>
            <div>Don't have an account?</div>
            <div className={classes.actions}>
              <Link to="/SignUp">
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        </Card>
    </div>
  );
}

export default Login;