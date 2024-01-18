import * as web3 from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
const base58 = require("bs58");

const payer = getKeypairFromEnvironment('SECRET_KEY')
// console.log(process.env.SECRET_KEY)
const connection = new web3.Connection(web3.clusterApiUrl('devnet'))

const transaction = new web3.Transaction()
const PING_PROGRAM_ADDRESS = new web3.PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa')
const PING_PROGRAM_DATA_ADDRESS =  new web3.PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod')

const instruction = new web3.TransactionInstruction({
    keys: [
        // { pubkey: PING_PROGRAM_ADDRESS, isSigner: false, isWritable: false },
        { pubkey: PING_PROGRAM_DATA_ADDRESS, isSigner: false, isWritable: true },
    ],
    programId: PING_PROGRAM_ADDRESS,
    data: Buffer.alloc(0), // All instructions are hellos
});


transaction.add(instruction)

// @ts-ignore
const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [payer],
    {
        commitment: 'confirmed',
        preflightCommitment: 'confirmed',
    });
console.log(`✅ Transaction completed! Signature is ${signature}`)
