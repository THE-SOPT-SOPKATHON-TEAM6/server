import { Router } from "express";
import BoardController from "../controllers";
import { body } from "express-validator/check";

const router = Router();

router.post("/board", [
    body('content').notEmpty(),
    body('scoreType').notEmpty(),
    body('createdAt').notEmpty()
],BoardController.createBoard);

router.get("/boards",BoardController.getBoard);

export default router;