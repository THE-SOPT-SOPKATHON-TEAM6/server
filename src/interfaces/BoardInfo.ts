import mongoose from "mongoose";

export interface BoardInfo {
    content: string;
    scoreImg: string;
    scoreType: string;
    createdAt: Date;
    writer: mongoose.Types.ObjectId;
}