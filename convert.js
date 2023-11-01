const fs = require("fs");
const { pgn2json }  = require("./pgnParser")

const pgnFormat = fs.readFileSync("./games/Anand.pgn", {encoding: "utf8"});
const pgnFormat1 = fs.readFileSync("./games/shobhit.pgn", {encoding: "utf8"});

console.log(pgn2json(pgnFormat))
console.log(pgn2json(pgnFormat1))
