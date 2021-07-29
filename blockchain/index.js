const Block = require('./block')
const cryptoHash = require('../crypto/crypto-hash')
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
    replaceChain(chain){
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
        console.log('replacing chain with',chain);
        this.chain = chain
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