import {Connection, clusterApiUrl, PublicKey,LAMPORTS_PER_SOL,Transaction,SystemProgram} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));


const transaction = new Transaction()

const sender = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
const receiver = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");

const amount = 1; // Amount of sol to send

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey:sender,
    toPubkey:receiver,
    lamports:LAMPORTS_PER_SOL * amount


});

transaction.add(sendSolInstruction);