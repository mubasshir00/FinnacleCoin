import React ,{Component} from 'react';

class App extends Component{

    state = {walletInfo : {address: 'fooxv6',balance: 9999} }

    render(){

        const {address,balance} = this.state.walletInfo

        return (
            <div>
                <h1>Hello, Welcome to FinnacleCoin</h1>
                
            </div>
        );
    }
}
export default App;