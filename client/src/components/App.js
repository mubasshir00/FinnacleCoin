// import { response } from 'express';
import React ,{Component} from 'react';

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
                <div>
                <h1>Hello, Welcome to FinnacleCoin</h1>
                </div>
                <div>
                    Address : {address}
                </div>
                <div>
                    Balance : {balance}
                </div>
            </div>
        );
    }
}
export default App;