import classes from './SignUpForm.module.css'
import Card from '../ui/Card'

import { useRef } from 'react'

import { Link } from "react-router-dom";

function SignUpForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const teamInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredTeam = teamInputRef.current.value;

        const SignUpData = {
            username: enteredUsername,
            password: enteredPassword,
            team: enteredTeam
        }

        props.onSignUp(SignUpData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Username</label>
                    <input type="text"  class="form-control" required id="username" ref={usernameInputRef}/>
                    <p><label htmlFor='password'>Password</label></p>
                    <input type="password" class="form-control" required id="password" ref={passwordInputRef}/>
                    <p><label htmlFor='team'>Team</label></p>
                    <select name="selectList" required id="team" ref={teamInputRef}>
                    <option value="42">Arsenal</option>
                    <option value="66">Aston Villa</option>
                    <option value="55">Brentford</option>
                    <option value="51">Brighton and Hove Albion</option>
                    <option value="44">Burnley</option>
                    <option value="49">Chelsea</option>
                    <option value="52">Crystal Palace</option>
                    <option value="45">Everton</option>
                    <option value="63">Leeds United</option>
                    <option value="46">Leicester City</option>
                    <option value="40">Liverpool</option>
                    <option value="50">Manchester City</option>
                    <option value="33">Manchester United</option>
                    <option value="34">Newcastle United</option>
                    <option value="71">Norwich City</option>
                    <option value="41">Southampton</option>
                    <option value="47">Tottenham Hotspur</option>
                    <option value="38">Watford</option>
                    <option value="48">West Ham United</option>
                    <option value="39">Wolverhampton Wanderers</option>
                    </select>
                </div>
                <div className={classes.actions}>
                    <button>Sign Up</button>
                </div>
                <div className= {classes.content}>
                    <div>Already have an account?</div>
                    <div className={classes.actions}>
                        <Link to="/Login">
                            <button>Login</button>
                        </Link>
                    </div>
                 </div>
            </form>
        </Card>
    )
}

export default SignUpForm;