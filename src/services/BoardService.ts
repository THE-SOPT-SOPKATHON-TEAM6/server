import Board from "../models/board"
import { BoardCreateDto } from "../interfaces/BoardCreateDto";


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

const createBoard = async(boardCreateDto: BoardCreateDto) => {

    try{
        
        const board = new Board({
            content: boardCreateDto.content,
            scoreType: boardCreateDto.scoreType,
            createdAt: boardCreateDto.createdAt,
            writer: "6288fe61a488925440fe8f4b"
        });

        if (boardCreateDto.scoreType == "note1"){
            board.scoreImg = "https://images.velog.io/images/rosarang/post/e42e7753-f6f8-439d-acf4-4911bcf1eac6/html.png";
        } else if (boardCreateDto.scoreType == "note2"){
            board.scoreImg = "https://www.google.com/url?sa=i&url=https%3A%2F%2Frgy0409.tistory.com%2F2869&psig=AOvVaw0Dw9U3V0HbzymTL6QI64PW&ust=1653234426628000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJD6r6r48PcCFQAAAAAdAAAAABAT";
        } else if (boardCreateDto.scoreType == "note3"){
            board.scoreImg = "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1evI/image/SUKTsEnkrQo2u66Iy7e2CpLS6TA.png";
        } else if (boardCreateDto.scoreType == "note4"){
            board.scoreImg = "https://sungunjo.github.io/assets/img/image_and_hyperlink/road_image.jpg";
        } else if (boardCreateDto.scoreType == "note5"){
            board.scoreImg = "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTZfMyAg/MDAxNTgxODIyOTEzMjI1.G4h32bGQAjYXBILweRrDCiryTtlzUAw6TaQK_rdIhPIg.7MsgGKYDCXJcoheeHZh75cM2QcaHoht_Om1UbryqalQg.JPEG.iminu6/11.jpg?type=w800";
        } 

        await board.save();

        const data = {
            _id: board._id
        };

        return data

    } catch(error) {
        console.log(error);
        throw error;
    }

}

export default {
    createBoard,
    getBoard
}