import User from "../model/user.schema"
import app from "../app"
import asyncHandler from "../utils/asyncHandler"
import customError  from "../utils/customError"

const createUser = asyncHandler( async (req, res) => {
    const {firstName, lastName, email, password} = req.body
})