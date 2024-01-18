import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import bs58 from 'bs58';

// console.log(process.env.YOUR_VARIABLE);

//const keypair = getKeypairFromEnvironment("YOUR_VARIABLE");

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, bs58.encode(keypair.secretKey));
//console.log(`The secret key is: `, keypair.secretKey);
