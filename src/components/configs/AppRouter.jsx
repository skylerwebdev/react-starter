import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/main/Home'

const AppRouter = () => {
    return (
        <>
          <Switch>
            <Route exact path='/' component={Home}/>
           
            
          </Switch>  
        </>
    )
}

export default AppRouter
