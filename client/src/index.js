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
import './index.css'
import history from './history'
render(
    <Router history={history}>
       <Switch>
           <Route exact path="/" component={App}/>
           <Route  path="/blocks" component={Blocks}/>
           <Route  path="/creare-transaction" component={ConductTransaction}/>
           <Route  path="/transaction-pool" component={TransactionPool}/>
       </Switch>
    </Router>,document.getElementById('root')
);

// console.log('JavaScript Hello!!');