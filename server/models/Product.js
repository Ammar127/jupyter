const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide name field "]
    },
    tag: [{ type: String }],
    price: { type: Number, default: 0 },
    recommendedPrice: { type: Number, default: 0 },
    description: {
        type: String,
        default: ''
    },
    images: [],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("product", ProductSchema);
