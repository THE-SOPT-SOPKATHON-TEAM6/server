import mongoose from "mongoose";
import { BoardInfo } from "../interfaces/BoardInfo";

const BoardSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    scoreImg: {
        type: String,
    },
    scoreType: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    writer: {
        type: mongoose.Types.ObjectId,
        //required: true,
        ref: "User",
    },
    countNum: {
        type: Number
    }
});

export default mongoose.model<BoardInfo & mongoose.Document>("Board", BoardSchema);