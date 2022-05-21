import express, { Request, Response } from "express";
import { BoardCreateDto } from "../interfaces/BoardCreateDto";
import statusCode from "../modules/statusCode";
import utils from "../modules/util";
import message from "../modules/responseMessage";


const createBoard = async (req: Request, res: Response) => {
    const boardCreateDto: BoardCreateDto = req.body();

    try {

    
        
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(utils.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}


export default {
    createBoard,
}