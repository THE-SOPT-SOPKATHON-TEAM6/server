import express, {Request, Response} from "express";
import { BoardResponseDto } from "../interfaces/BoardResponseDto";
import { BoardCreateDto } from "../interfaces/BoardCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import BoardService from "../services/BoardService";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";

/**
 *  @route GET /boards
 *  @desc Get Board
 *  @access Public
 */

const getBoard = async (req: Request, res: Response) => {
    try {
        const data: BoardResponseDto[] = await BoardService.getBoard();

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_BOARD_SUCCESS, data));
     }
      catch (error) {
            console.log(error);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
        }
 }

const createBoard = async (req: Request, res: Response) => {

    const boardCreateDto: BoardCreateDto = req.body;

    try {

        const data: PostBaseResponseDto = await BoardService.createBoard(boardCreateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_BOARD_SUCCESS, data));
        
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createBoard,
    getBoard
}