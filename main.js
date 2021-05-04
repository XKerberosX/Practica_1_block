const Block = require("./Block")
const BlockChain = require("./BlockChain")
let block = new Block(0,"lo que sea", null);
console.log(block);
const BlockChain = new BlockChain ("nueva moneda");
BlockChain.addBlock("data de nuevo bloque");