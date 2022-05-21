import mongoose from "mongoose";
import { UserInfo } from "../interfaces/UserInfo";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);