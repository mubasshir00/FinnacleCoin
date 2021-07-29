const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const Blockchain = require('./blockchain/index');
const PubSub = require('./app/pubsub');

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

const DEFAULT_PORT = 3000;

const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`

// setTimeout(() => pubsub.broadcastChain(), 1000);

// app.use(bodyParser.json());
// app.use(bodyParser.json());
app.use(express.json());

//to get blockchain blocks
app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain); //send back the blockchain in JSON form to whoever makes API block req
})

app.post('/api/mine', (req, res) => {
    const { data } = req.body;
    blockchain.addBlock({ data });
    pubsub.broadcastChain();
    res.redirect('/api/blocks')
})

const syncChains = () => {
    request({ url: `${ROOT_NODE_ADDRESS}/api/blocks` }, (error,response,body) => {
        if (!error && response.statusCode ===200)
        {
            const rootChain = JSON.parse(body);

            console.log('replace chain on a sync with',rootChain);

            blockchain.replaceChain(rootChain);
        }
    });
};

let PEER_PORT;
if (process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

//start express
const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
    console.log('Apps opening in localhost', PORT);
    if(PORT!==DEFAULT_PORT){
        syncChains();
    }
})