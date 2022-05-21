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
            board.scoreImg = "https://user-images.githubusercontent.com/59546818/169656548-e95e16d8-88cb-4d31-a726-de7a1df711cf.png";
        } else if (boardCreateDto.scoreType == "note2"){
            board.scoreImg = "https://user-images.githubusercontent.com/59546818/169656548-e95e16d8-88cb-4d31-a726-de7a1df711cf.png";
        } else if (boardCreateDto.scoreType == "note3"){
            board.scoreImg = "https://user-images.githubusercontent.com/59546818/169656548-e95e16d8-88cb-4d31-a726-de7a1df711cf.png";
        } else if (boardCreateDto.scoreType == "note4"){
            board.scoreImg = "https://user-images.githubusercontent.com/59546818/169656548-e95e16d8-88cb-4d31-a726-de7a1df711cf.png";
        } else if (boardCreateDto.scoreType == "note5"){
            board.scoreImg = "https://user-images.githubusercontent.com/59546818/169656548-e95e16d8-88cb-4d31-a726-de7a1df711cf.png";
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
