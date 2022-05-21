import Board from "../models/board"

const getBoard = async() => {
 try {
     const board = await Board.find({
         writer: "6288fe61a488925440fe8f4b"
     })

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

export default{
    getBoard
}