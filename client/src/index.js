import React from 'react'
import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import App from './components/App'
import Blocks from './components/Blocks'
import ConductTransaction from './components/ConductTransaction'
import TransactionPool from './components/TransactionPool'
import history from './history'
import './index.css'
render(
    <Router history={history}>
       <Switch>
           <Route exact path="/" component={App}/>
           <Route exact path="/blocks" component={Blocks}/>
           <Route exact path="/creare-transaction" component={ConductTransaction}/>
           <Route exact path="/transaction-pool" component={TransactionPool}/>
       </Switch>
    </Router>,document.getElementById('root')
);

// console.log('JavaScript Hello!!');