import { getTeam, setTeam, updateBalance, updateRound, updateScore } from "../db/teams";
import express from "express"

export const getTEAM = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.body;
      const data = await getTeam(id);
  
      return res.status(200).json(data);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  };
  

export const setTEAM = async (req: express.Request, res: express.Response) => {
    try {
        const { id, name, balance, score, round } = req.body;
        const data = await setTeam(id, name, balance, score, round);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(400).json(e);
    }

}

export const updateBALANCE = async (req: express.Request, res: express.Response) => {
    try {
        const { id, balance } = req.body;
        const data = await updateBalance(id, balance);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(400).json(e);
    }

}

export const updateSCORE = async (req: express.Request, res: express.Response) => {
    try {
        const { id, score } = req.body;
        const data = await updateScore(id, score);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(400).json(e);
    }

}

export const updateROUND = async (req: express.Request, res: express.Response) => {
    try {
        const { id, round } = req.body;
        const data = await updateRound(id, round);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(400).json(e);
    }

}
