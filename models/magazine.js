// demo for magazines
//Magazines
//
//ID | Tilte | publisher | Issue | Pages
//
//
//SHEMA magazine
//Title: { tyoe: String, ....... },
//.
//.
//.
//Pages: {type: Number, min: 0...}
//.
//.
//13/02/2020

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var MagazineSchema = new Schema({
    title: String,
    publisher: String,
    pages: { type: Number, min: 0 },
    publication_date: { type: Date, min: Date.now() }
});

module.exports = mongoose.model("Magazine", MagazineSchema);
