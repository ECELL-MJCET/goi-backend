import express from "express";
import {
  getAbidas,
  getnafidia,
  getPio,
  getTara,
  getTsx,
  getVa,
} from "../db/getStocks";
import {
  postAbidas,
  postNafidia,
  postPio,
  postTara,
  postTsx,
  postVa,
} from "../db/postStocks";

export const getTSX = async (req: express.Request, res: express.Response) => {
  try {
    const { round } = req.body;
    const data = await getTsx(round);

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const getNAFIDIA = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { round } = req.body;
    const data = await getnafidia(round);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const getABIDAS = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { round } = req.body;
    const data = await getAbidas(round);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const getPIO = async (req: express.Request, res: express.Response) => {
  try {
    const { round } = req.body;
    const data = await getPio(round);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const getTARA = async (req: express.Request, res: express.Response) => {
  try {
    const { round } = req.body;
    const data = await getTara(round);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const getVA = async (req: express.Request, res: express.Response) => {
  try {
    const { round } = req.body;
    const data = await getVa(round);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const postTSX = async (req: express.Request, res: express.Response) => {
  try {
    const { round, stock_name, current, future, profit, returns } = req.body;
    const data = await postTsx(
      round,
      stock_name,
      current,
      future,
      profit,
      returns
    );
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const postNAFIDIA = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { round, stock_name, current, future, profit, returns } = req.body;

    const data = await postNafidia(
      round,
      stock_name,
      current,
      future,
      profit,
      returns
    );

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const postABIDAS = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { round, stock_name, current, future, profit, returns } = req.body;
    const data = await postAbidas(
      round,
      stock_name,
      current,
      future,
      profit,
      returns
    );
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const postPIO = async (req: express.Request, res: express.Response) => {
  try {
    const { round, stock_name, current, future, profit, returns } = req.body;
    const data = await postPio(
      round,
      stock_name,
      current,
      future,
      profit,
      returns
    );
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const postTARA = async (req: express.Request, res: express.Response) => {
  try {
    const { round, stock_name, current, future, profit, returns } = req.body;
    const data = await postTara(
      round,
      stock_name,
      current,
      future,
      profit,
      returns
    );
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

export const postVA = async (req: express.Request, res: express.Response) => {
  try {
    const { round, stock_name, current, future, profit, returns } = req.body;
    const data = await postVa(
      round,
      stock_name,
      current,
      future,
      profit,
      returns
    );
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};
