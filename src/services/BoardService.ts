import Board from "../models/board"
import { BoardCreateDto } from "../interfaces/BoardCreateDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { BoardResponseDto } from "../interfaces/BoardResponseDto";


const getBoard = async(): Promise<BoardResponseDto[]> =>{
 try {
     const board = await Board.find({
         writer: "6288fe61a488925440fe8f4b"
     });
     

     const data = await Promise.all(board.map((board: any) => {

        const result = {
            content: board.content,
            scoreImg: board.scoreImg,
            scoreType: board.scoreType,
            createdAt: board.createdAt
        };
        return result;
     }));

     return data;

 } catch (error) {
     console.log(error);
     throw error;
 }   
}

const createBoard = async(boardCreateDto: BoardCreateDto): Promise<PostBaseResponseDto | number> =>{

    try{

        const count = await Board.countDocuments({ writerId : "6288fe61a488925440fe8f4b" }) + 1;

        if (count >= 22) {
            return 204;
        }
        
        const board = new Board({
            content: boardCreateDto.content,
            scoreType: boardCreateDto.scoreType,
            createdAt: boardCreateDto.createdAt,
            writer: "6288fe61a488925440fe8f4b",
            countNum: count
        });
        
        if (boardCreateDto.scoreType == "note1"){
            board.scoreImg = "https://user-images.githubusercontent.com/82046935/169669801-f870362f-b345-4be0-9c56-b3b909e96378.png";
        } else if (boardCreateDto.scoreType == "note2"){
            board.scoreImg = "https://user-images.githubusercontent.com/82046935/169669874-0b36fe7e-f766-4000-9c7e-c7e722e44595.png";
        } else if (boardCreateDto.scoreType == "note3"){
            board.scoreImg = "https://user-images.githubusercontent.com/82046935/169669823-59156faa-076b-4350-a748-f20b5ab57462.png";
        } else if (boardCreateDto.scoreType == "note4"){
            board.scoreImg = "https://user-images.githubusercontent.com/82046935/169669835-ae12dbd5-bde1-4b01-b015-ca3f2851d508.png";
        } else if (boardCreateDto.scoreType == "note5"){
            board.scoreImg = "https://user-images.githubusercontent.com/82046935/169669865-a827db80-f6a8-45a7-899c-c66debab1acf.png";
        } 

        await board.save();

        const data = {
            countNum: count
        };

        return data;

    } catch(error) {
        console.log(error);
        throw error;
    }

}

export default {
    createBoard,
    getBoard
}
