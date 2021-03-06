
// import { response } from 'express';
import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
// import './TransactionHome'
class TransactionHome extends Component{

    state = {walletInfo : {} };

    componentDidMount(){
        fetch(`${document.location.origin}/api/wallet-info`)
        .then(response=>response.json())
        .then(json=>this.setState({walletInfo:json}));
    }

    render(){

        const {address,balance} = this.state.walletInfo

        return (
            <div className="bodyCom">
                {/* <img className="logo" src={logo} alt=""/> */}
                <div className="transactionDiv">
                <div>
                    <h1>Hello, Welcome to FinnacleCoin</h1>
                </div>
                <br/>
                <div>
                    <Link to="/blocks">Blocks</Link>
                </div>
                <div>
                    <Link to="/creare-transaction">Create Transaction</Link>
                </div>
                <div>
                    <Link to="/transaction-pool">Transaction Pool</Link>
                </div>
                <br/>
                <div className="addressDiv">
                    Address : {address}
                </div>
                <div>
                    Balance : {balance}
                </div>
                </div>
            </div>
        );
    }
}
export default TransactionHome;
