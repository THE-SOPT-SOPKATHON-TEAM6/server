import { Router } from "express";
import BoardRouter from "./BoardRouter";

const router = Router();

router.use("/", BoardRouter);

export default router;