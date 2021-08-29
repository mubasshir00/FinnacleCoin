// import { response } from 'express';
import React ,{Component} from 'react';
import Blocks  from './Blocks';
import logo from '../assets/logo.png'
class App extends Component{

    state = {walletInfo : {} }

    componentDidMount(){
        fetch('http://localhost:3000/api/wallet-info')
        .then(response=>response.json())
        .then(json=>this.setState({walletInfo:json}));
    }

    render(){

        const {address,balance} = this.state.walletInfo

        return (
            <div>
                <img className="logo" src={logo} alt=""/>
                <div className="transactionDiv">
                <div>
                    <h1>Hello, Welcome to FinnacleCoin</h1>
                </div>
                <div className="addressDiv">
                    Address : {address}
                </div>
                <div>
                    Balance : {balance}
                </div>
                <br/>
                <Blocks/>
                </div>
            </div>
        );
    }
}
export default App;