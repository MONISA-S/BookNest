const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    author: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["available", "issued", "reserved"],
      default: "available"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Book", bookSchema);