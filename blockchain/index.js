const Block = require('./block')
const Wallet = require('../wallet')
const {cryptoHash} = require('../util');
const { REWARD_INPUT, MINING_REWARD } = require('../config');
const Transaction = require('../wallet/transaction')
class Blockchain{
    constructor(){
        //our chain array start with genesis block
        this.chain = [Block.genesis()];//chain array .
    }

    addBlock({data}){
        const newBlock = Block.mineBlock({
            lastBlock:this.chain[this.chain.length-1],
            data
        });
        this.chain.push(newBlock);
    }

    //replacing the chain is based on an individual instance 
    // replaceChain() takes incoming chain as argument
    replaceChain(chain,validateTransactions,onSuccess){
        //check incoming chain <= current chain 
        if(chain.length<=this.chain.length){
            console.error('The incoming chain must be longer');
            return;
        }

        //don't replace the chain if incoming chain is invalid
        if(!Blockchain.isValidChain(chain)){
            console.error('The incoming chain must be valid');
            return;
        }

        if(validateTransactions && !this.validTransactionData({chain})){
            console.error('The incoming chain has invalid data');
            return;
        }

        if(onSuccess)onSuccess();
        console.log('replacing chain with',chain);
        this.chain = chain
    }

    validTransactionData({chain}){
        for(let i=1;i<chain.length;i++){
            const block = chain[i];
            const transactionSet = new Set();
            let rewardTransactionCount = 0;

            for(let transaction of block.data){
                if(transaction.input.address === REWARD_INPUT.address){
                    rewardTransactionCount+=1;

                    if(rewardTransactionCount >1){
                        console.error('Miner rewards exceed limit')
                        return false;
                    }

                    if(Object.values(transaction.outputMap)[0]!== MINING_REWARD)
                    {
                        console.error('Miner reward amount is invalid');
                    return false;
                    }
                } else {
                    if(!Transaction.validTransactionData(transaction)){
                        console.error('Invalid Transaction');
                        return false;
                    }
                    
                    const trueBalance = Wallet.calculateBalance({
                        chain:this.chain,
                        address:transaction.input.address
                    });

                    if(transaction.input.amount !== trueBalance){
                        console.error('Invalid Input Amount');
                        return false;
                    }

                    if(transactionSet.has(transaction)){
                        console.log('An identical transaction app appears more than once in a block');
                        return false;
                    } else {
                        transactionSet.add(transaction);
                    }
                }
            }
        }
        return true;
    }

    static isValidChain(chain){
        if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis())){
            return false;
        }

        for(let i =1 ;i<chain.length;i++){
            // const block = chain[i];

            const {timestamp,lastHash , hash ,nonce,difficulty,data} = chain[i] ;
            const actualLastHash = chain[i-1].hash;
            const lastDifficulty = chain[i-1].difficulty;

            if(lastHash!==actualLastHash)return false;

            const validatedHash = cryptoHash(timestamp,lastHash,data,nonce,difficulty);

            if(hash!==validatedHash) return false;

            if(Math.abs(lastDifficulty - difficulty)>1)return false;
        }

        return true;
    }
}
module.exports = Blockchain;