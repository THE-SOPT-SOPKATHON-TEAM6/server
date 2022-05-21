import { Router } from "express";
import BoardRouter from "./BoardRouter";

const router = Router();

router.use("/board", BoardRouter);

export default router;