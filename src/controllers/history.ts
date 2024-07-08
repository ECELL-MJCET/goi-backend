import express from "express"
import {  updateTransaction } from "../db/history";

export const updateTransactions = async (req: express.Request, res: express.Response) => {


    try {
        const { team_id, stock, amount, round } = req.body;

        const { returns,score } = await getReturnsAndCalulateScore(stock,amount,round);

        const transaction = await updateTransaction(team_id, stock, amount, round, returns, score);

        return res.status(200).json(transaction);

    }
    catch (e) {
       
        return res.status(400).json(e);
    }

}