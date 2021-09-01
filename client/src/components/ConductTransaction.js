import { response } from 'express';
import React, { Component } from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import {
    Link
} from 'react-router-dom'

import history from '../history'

class ConductTransaction extends Component {
    state={
        recipient: '',amount:0,knownAddresses:[]
    };

    componentDidMount(){
        fetch(`${document.location.origin}/api/known-addresses`)
         .then(response => response.json())
         .then(json=>this.setState({knownAddresses:json}));
    }

    updateRecipient = event =>{
        this.setState({recipient:event.target.value});
    }

    updateAmount = event =>{
        this.setState({amount:Number(event.target.value)});
    }

    conductTransaction = () =>{
        const {recipient,amount} = this.state;

        fetch(`${document.location.origin}/api/transact`,{
            method: 'POST',
            headers:{ 'Content-Type' : 'application/json'},
            body: JSON.stringify({recipient,amount})
        }).then((response)=>response.json())
          .then(json=>{
            alert(json.message || json.type);
            history.push('/transaction-pool')
        });
    }

    render() {
        // console.log('This State',this.state);
        return (
            <div className="ConductTransaction">
                <Link to="/">Home</Link>
                <h3>Conduct a transaction</h3>
                <h4>Known Adresses</h4>
                {
                    this.state.knownAddresses.map(knownAddress =>{
                        return(
                            <div key={knownAddress}>
                                {knownAddress}
                                <br/>
                            </div>
                        )
                    })
                }
                <h3>Create Transaction</h3>
                <br/>
                <FormGroup>
                    <FormControl
                    input="text"
                    placeholder="Recipient"
                    onChange={this.updateRecipient}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                    input="number"
                    placeholder="Amount"
                    onChange={this.updateAmount}
                    />
                </FormGroup>
                <div>
                    <Button
                    variant="primary"
                    onClick={this.conductTransaction}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
}

export default ConductTransaction
