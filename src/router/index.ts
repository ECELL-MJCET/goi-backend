import express from "express";
import { getABIDAS, getNAFIDIA, getPIO, getTSX, postABIDAS, postNAFIDIA, postPIO, postTARA, postTSX, postVA } from "../controllers/stocks";
import { getTara, getVa } from "../db/getStocks";

const router = express.Router();

router.post("/gettsx", getTSX);
router.post("/getnafidia", getNAFIDIA);
router.post("/getabidas", getABIDAS);
router.post("/getpio", getPIO);
router.post("/gettara", getTara);
router.post("/getva", getVa);

router.post("/posttsx", postTSX);
router.post("/postnafidia", postNAFIDIA);
router.post("/postabidas", postABIDAS);
router.post("/postpio", postPIO);
router.post("/posttara", postTARA);
router.post("/postva", postVA);


export default router;
