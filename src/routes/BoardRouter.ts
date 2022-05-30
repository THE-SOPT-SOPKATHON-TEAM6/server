import { Router } from "express";
import BoardController from "../controllers";
const { body } = require("express-validator");

const router = Router();

router.post("/board", [
    body('content').notEmpty(),
    body('scoreType').notEmpty(),
    body('createdAt').notEmpty()
],BoardController.createBoard);

router.get("/boards",BoardController.getBoard);

export default router;
