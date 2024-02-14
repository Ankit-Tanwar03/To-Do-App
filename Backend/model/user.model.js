import mongoose from mongoose;
import JWT from "jsonwebtoken";
import config from "../config/env.config";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email name is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
},
{
    timestamps: true
})

const getJwtToken = function () {
    JWT.sign({
        id: this.id,
        email: this.email
    },
    config.JWT_SECRET,
    {ExpiresIn: config.JWT_EXPIRY})
}

export default mongoose.model("User", userSchema)