import mongoose from "mongoose";

export interface BoardInfo {
    content: string;
    scoreImg: string;
    scoreType: string;
    createdAt: string;                
    writer: mongoose.Types.ObjectId;
    countNum: number;

}