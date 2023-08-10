const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://db:Tucson233@cluster0.gfac6fk.mongodb.net/", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
  },
  { collection: "libros" }
);
const Libro = mongoose.model("Libro", LibroSchema);
module.exports = Libro;
