import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../container/Login/Login'
import HomeContainer from '../container/Home/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/Home' component={HomeContainer}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
