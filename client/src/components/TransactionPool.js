import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Transaction from './Transaction';
import history from '../history'

const POLL_INERVAL_MS = 10000;

class TransactionPool extends Component {
    state = {transactionPoolMap:{}}
    fetchTransactionPoolMap = () =>{
        fetch(`${document.location.origin}/api/transaction-pool-map`)
        .then(response=>response.json())
        .then(json=>this.setState({transactionPoolMap:json}));
    }
    componentDidMount(){
        this.fetchTransactionPoolMap();

        this.fetchPoolMapInterval =setInterval(
            () => this.fetchTransactionPoolMap(),
            POLL_INERVAL_MS
        );
    }
    componentWillUnmount(){
        clearInterval(this.fetchPoolMapInterval);
    }
    fetchMineTransactions = () =>{
        fetch(`${document.location.origin}/api/mine-transaction`)
           .then(response=>{
               if(response.status===200){
                   alert('success');
                   history.push('/blocks');
               } else{
                   alert('The mine-transactions block request did not complete.');
               }
           })
    }
    render(){
        return(
            <div>
                <div>
                    <Link to="/">Home</Link>
                    <h3>Transaction Pool</h3>
                    {
                        Object.values(this.state.transactionPoolMap).map(transaction=>{
                            return (
                                <div key={transaction.id}>
                                    <hr/>
                                    <Transaction transaction={transaction}/>
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                <Button
                variant="primary"
                onClick = {this.fetchMineTransactions}
                >
                    Mine The Transactions
                </Button>
            </div>
        )
    }
}

export default TransactionPool
