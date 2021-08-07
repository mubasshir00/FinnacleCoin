class TransactionMiner {

    constructor({blockchain,transactionPool,wallet, pubsub}){
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet ;
        this.pubsub = pubsub;
    }

    mineTransactions(){
        //get the transaction pool's valid transaction
        
        //generate miner's reward


        //broadcast the updated blochain


        //clear the pool

    }
}
module.exports = TransactionMiner;