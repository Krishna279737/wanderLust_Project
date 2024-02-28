const mongoose = require("mongoose");
// const { Schema } = mongoose.Schema;

const reviewSchema = mongoose.Schema ({
    comment: {
        type: String,
        required: true, 
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

module.exports = mongoose.model("Review", reviewSchema)