const hexToBinary = require('hex-to-binary')
const {GENESIS_DATA , MINE_RATE} = require('../config');
const {cryptoHash} = require('../util');
//hash method is for crypthography and security
class Block {
    constructor({timestamp , hash , lastHash , data,nonce,difficulty}){
        this.timestamp = timestamp ;
        this.hash = hash ;
        this.lastHash = lastHash ;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    //initial dummy block 
    static genesis(){
        return new this(GENESIS_DATA) //genesis data from block.js
    }

    //for mining 
    static mineBlock({lastBlock,data}){
        const lastHash = lastBlock.hash;
        let hash , timestamp;
        // const timestamp = Date.now();
        let {difficulty} = lastBlock;
        let nonce = 0;
//do while loop for proof of work
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({originalBlock:lastBlock , timestamp});
            hash = cryptoHash(timestamp,lastHash,data,nonce,difficulty);
        }while(hexToBinary(hash).substring(0,difficulty) !== '0'.repeat(difficulty)); 

        return new this({
            timestamp,
            lastHash,
            data,
            difficulty,
            nonce,
            hash
        });
    }

    static adjustDifficulty({originalBlock ,timestamp}){
        const {difficulty} = originalBlock ;

        if(difficulty<1) return 1;

        const difference = timestamp - originalBlock.timestamp;

        if(difference>MINE_RATE) return difficulty - 1; 
        
        return difficulty+1;

    }
}
module.exports = Block