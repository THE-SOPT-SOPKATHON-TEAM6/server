import express, {Request, Response} from "express";
import { BoardResponseDto } from "../interfaces/BoardResponseDto";
import { BoardCreateDto } from "../interfaces/BoardCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import BoardService from "../services/BoardService";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { validationResult } from "express-validator";

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

/**
 *  @route POST /board
 *  @desc Post Board
 *  @access Public
 */

const createBoard = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,message.NULL_VALUE));
    }

    const boardCreateDto: BoardCreateDto = req.body;

    try {

        const data: PostBaseResponseDto | number = await BoardService.createBoard(boardCreateDto);

        if (data == 204) {
            res.status(statusCode.NO_CONTENT).send(util.fail(statusCode.NO_CONTENT, message.NO_CONTENT));
        }

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
