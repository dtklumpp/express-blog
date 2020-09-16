const mongoose = require("mongoose");

// Schema("template", optional configuration obj)
const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a name."] },
    // example articles: ["asd90f87asdf09asd"]
    articles: [
      // reference
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true, // adds a createdAt and an updatedAt
    // createdAt: "joined" you can rename these properties
  }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
