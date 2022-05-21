import { Router } from "express";
import BoardController from "../controllers";

const router = Router();

router.post("/board", BoardController.createBoard);

router.get("/boards",BoardController.getBoard);

export default router;