import {Connection, clusterApiUrl, PublicKey,LAMPORTS_PER_SOL} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
// @ts-ignore
const balance = await connection.getBalance(address);
const balanceInSol= balance / LAMPORTS_PER_SOL;
console.log(`✅ Connected!`)

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);