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
import Home from './components/HomeComponents/Home'
// import Signup from './components/SignInSignUp/Signup'
render(
    <Router history={history}>
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/transactionhome" component={App}/>
           {/* <Route exact path="/siginup" component={Signup}/> */}
           <Route  path="/blocks" component={Blocks}/>
           <Route  path="/creare-transaction" component={ConductTransaction}/>
           <Route  path="/transaction-pool" component={TransactionPool}/>
       </Switch>
    </Router>,document.getElementById('root')
);

// console.log('JavaScript Hello!!');