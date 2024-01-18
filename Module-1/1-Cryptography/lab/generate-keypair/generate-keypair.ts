import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
const bs58 = require('bs58');


require('dotenv').config();

console.log(`Current working directory: ${process.cwd()}`);

//const keypair = Keypair.generate();

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(`✅ Generated keypair!`)

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, bs58.encode(keypair.secretKey));
console.log(`✅ Finished!`);