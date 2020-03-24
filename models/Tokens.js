const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    token: {
        type: String,
        unique: true,
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("token", tokenSchema);