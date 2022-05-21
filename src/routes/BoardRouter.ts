import { Router } from "express";
import BoardController from "../controllers";

const router = Router();

router.post("/", BoardController.createBoard);

export default router;