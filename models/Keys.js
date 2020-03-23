const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keySchema = new Schema({
    key: {
        type: String,
        unique: true
    },
    status: {
        type: Number,
        enum: [0, 1]
    }
})

module.exports = mongoose.model("key", keySchema);