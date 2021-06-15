import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LogIn from '../pages/LogIn.js';
import Home from '../pages/Home.js';
import Error from '../components/Error.js';
import TableOrder from '../pages/TableOrder.js';

function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tableOrder">
            <TableOrder/>
          </Route>
          <Route path="/tableSummary">
            <h1>TableSummary</h1>
          </Route>
          <Route path="/orders">
            <h1>Orders</h1>
          </Route>
          <Route path="/kitchen">
            <h1>Kitchen</h1>
          </Route>
          <Route exact path="/">
            <LogIn/>
          </Route>
          <Route path="*">
            <Error messageTitle="MENSAJE" message1 ="Cuenta de usuario no es válida." message2 = "Inténtelo otra vez." button="ACEPTAR"/>
          </Route>
        </Switch>
      </Router>
    );
}
 
export default AppRouter;