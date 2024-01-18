import {Connection, clusterApiUrl, PublicKey,LAMPORTS_PER_SOL,Transaction,SystemProgram,sendAndConfirmTransaction} from "@solana/web3.js";

import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";


const connection = new Connection(clusterApiUrl("devnet"));

console.log(process.env.KEY_PAIR)
const senderKeypair = getKeypairFromEnvironment("KEY_PAIR");


const transaction = new Transaction()

const sender = new PublicKey("4dvZZmw5PhoQRSDz3KgzfZkioxa7PZjJuRvguwzSwxK7");
const receiver = new PublicKey("En5z1QWHbUtWdd54mdK1QVEBSpvDwejZDkroFAbccXbD");

const amount = 1; // Amount of sol to send

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey:senderKeypair.publicKey,
    toPubkey:receiver,
    lamports:LAMPORTS_PER_SOL * amount


});

transaction.add(sendSolInstruction);

// @ts-ignore
const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
]);

console.log(
    `💸 Finished! Sent ${amount} to the address ${receiver}. `
);
console.log(`Transaction signature is ${signature}!`);