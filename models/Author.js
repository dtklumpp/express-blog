const mongoose = require("mongoose");

// Schema("template", optional configuration obj)
const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a name."] },
  },
  {
    timestamps: true, // adds a createdAt and an updatedAt
    // createdAt: "joined" you can rename these properties
  }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
