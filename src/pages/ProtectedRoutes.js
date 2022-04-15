import React from 'react'
import { Redirect } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Route } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext';

export default function ProtectedRoutes({component: Component, ...rest}) {
  const { LoginData } = useContext(LoginContext)
 
    return (
    <Route
    {...rest}
        render ={props => {
            if ( LoginData = "Logged In"){
                <Redirect to="/MyTeams" />
            }
            else if (LoginData = "Logged Out"){
                <Redirect to="/Login" />
            }
        }}
    >

    </Route>
  )
}
