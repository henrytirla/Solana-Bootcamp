import { Keypair } from "@solana/web3.js";
require('dotenv').config();
const bs58 = require('bs58');

console.log(process.env.SECRET_KEY);

import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
//const keypair = Keypair.generate();

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(`✅ Generated keypair!`)

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, bs58.encode(keypair.secretKey));
console.log(`✅ Finished!`);