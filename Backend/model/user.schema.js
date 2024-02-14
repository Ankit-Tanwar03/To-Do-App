const mongoose = require("mongoose")
const JWT = require("jsonwebtoken");
const config = require("../config/env.config");
const bcrypt = require("bcrypt")

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
    {
        ExpiresIn: config.JWT_EXPIRY
    })
}

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

module.exports = mongoose.model("User", userSchema)