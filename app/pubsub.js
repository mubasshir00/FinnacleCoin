const redis = require('redis');

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN:'BLOCKCHAIN',
    TRANSACTION : 'TRANSACTION'
};

class PubSub {
    constructor ({ blockchain , transactionPool }) {

        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.publisher = redis.createClient();
        this.subscriber = redis.createClient();

        this.subscribeToChannels();
        //subscriber has ability to recieve messge that publish in channel
        this.subscriber.subscribe(CHANNELS.TEST);
        this.subscriber.subscribe(CHANNELS.BLOCKCHAIN);

        this.subscriber.on(
            'message',
            (channel,message) => this.handleMessage(channel,message)
        )
    }

    handleMessage(channel, message) {
        console.log(`Message received. Channel : ${channel}. Message: ${message}.`);

        const parsedMessage = JSON.parse(message);

        switch(channel){
            case CHANNELS.BLOCKCHAIN:
                this.blockchain.replaceChain(parsedMessage,true, ()=>{
                    this.transactionPool.clearBlockchainTransactions({
                        chain:parsedMessage
                    });
                });
                break;
            case CHANNELS.TRANSACTION:
                this.transactionPool.setTransaction(parsedMessage);
                break;
            default:
                return ;
        }

        if (channel === CHANNELS.BLOCKCHAIN) {
            this.blockchain.replaceChain(parsedMessage);
        }
    }
    subscribeToChannels() {
        Object.values(CHANNELS).forEach(channel => {
            this.subscriber.subscribe(channel);
        });
    }

    //publish method that direclty call pubsub instance
    publish({channel,message}){

        this.subscriber.unsubscribe(channel,()=>{
            this.publisher.publish(channel, message,()=>{
                this.subscriber.subscribe(channel);
            });
        });
    }

    broadcastChain() {
        this.publish({
            channel: CHANNELS.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain)
        });
    }
    broadcastTransaction(transaction){
        this.publish({
            channel: CHANNELS.TRANSACTION,
            message: JSON.stringify(transaction)
        });
    }
    
}


module.exports = PubSub;
