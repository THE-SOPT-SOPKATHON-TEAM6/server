import { BoardCreateDto } from "../interfaces/BoardCreateDto";
import board from "../models/Board";

const createBoard = async(boardCreateDto: BoardCreateDto) => {

    try{
        

    } catch(error) {
        console.log(error);
        throw error;
    }

}

export default {
    createBoard,
}