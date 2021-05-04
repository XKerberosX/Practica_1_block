const  SHA256 = require("crypto-js/sha256");
class Block {
  // index = identificador de la posicion del bloque en la cadena
  // data = el contenido del bloque
  // previousHash = valor del bloque anterior
  constructor(index, data, previousHash="") {
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.date = new Date();
    this.nonce = 0;
    this.hash = this.createdHash();
  }
  createdHash() {
    return SHA256(` ${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
  }
  mine(difficulty)
}
  


  //Cifrado:
  // Simetrico.-
  // Asimetrico.-
  module.exports = Block;
