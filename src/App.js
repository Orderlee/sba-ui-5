import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Nav} from './components'
import {Board, Home, Item, User} from './templates'
import {UserLogin, UserRegister, UserRemove, UserUpdate} from './components/user'
import {ItemRead, ItemRegister, ItemRemove, ItemUpdate} from './components/item'
import {BoardRead, BoardRegister, BoardRemove, BoardUpdate} from './container/board'




const App = () => (<>
  <Router>
    <Nav/>
      <Switch>
        
          <Route exact path='/home' component = {Home}></Route>
          <Redirect exact from ={'/'} to = {'/home'}></Redirect>
          
          
          <Redirect path ='/user' component = {'User'}></Redirect>
          <Redirect path ='/singup-form' component = {'UserRegister'}></Redirect>
          <Redirect path ='/singin-form' component = {'UserLogin'}></Redirect>
          <Redirect path ='/mypage' component = {'UserDetail'}></Redirect>
          <Redirect path ='/modtfying-user-info' component = {'UserModify'}></Redirect>
          <Redirect path ='/membership-withdrawl' component = {'UserWithdrawal'}></Redirect>
          



          {/* <Route exact path='/user' component = {User}></Route>
          <Route path ='/user/login' component = {UserLogin}></Route>
          <Route path ='/user/register' component = {UserRegister}></Route>
          <Route path ='/user/remove' component = {UserRemove}> </Route>
          <Route path ='/user/update' component = {UserUpdate}></Route> */}

          <Route exact path='/item' component = {Item}></Route>
          <Route  path='/item/read' component = {ItemRead}></Route>
          <Route  path='/item/register' component = {ItemRegister}></Route>
          <Route  path='/item/remove' component = {ItemRemove}></Route>
          <Route  path='/item/update' component = {ItemUpdate}></Route>

          <Route exact path='/board' component = {Board}></Route>
          <Route path='/board/read' component = {BoardRead}></Route>
          <Route path='/board/register' component = {BoardRegister}></Route>
          <Route path='/board/remove' component = {BoardRemove}></Route>
          <Route path='/board/update' component = {BoardUpdate}></Route>

        
      </Switch>
    
  </Router>
</>)

export default App