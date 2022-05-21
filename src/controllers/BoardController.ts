import express, {Request, Response} from "express";
import { BoardResponseDto } from "../interfaces/BoardResponseDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import BoardService from "../services/BoardService";

/**
 *  @route GET /boards
 *  @desc Get Board
 *  @access Public
 */

const getBoard = async (req: Request, res: Response) => {
    try {
        const data: BoardResponseDto[] = await BoardService.getBoard();

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_BOARD_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default{
    getBoard
}