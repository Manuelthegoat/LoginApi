const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: [true, "Please Provide First Name"]
        },
        LastName: {
            type: String,
            required: [true, "Please Provide First Name"]
        },
        Age: {
            type: Number,
            required: true,
        },
    },
    {
         timestamps: true
    }
)
const USER = mongoose.model('USER', userSchema)

module.exports = USER