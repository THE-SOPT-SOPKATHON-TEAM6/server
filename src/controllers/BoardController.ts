import express, { Request, Response } from "express";
import { BoardCreateDto } from "../interfaces/BoardCreateDto";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import BoardService from "../services/BoardService";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";

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
}