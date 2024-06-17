const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        jobTitle: String,
        address: String
    },
    {
        timestamps: true
    }
)

module.exports =  mongoose.model("User", userSchema)

