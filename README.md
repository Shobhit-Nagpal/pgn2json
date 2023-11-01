# About
This repo is to show the conversion of a chess game in PGN format to JSON.
The main functionality is in pgnParser.js.
The convert.js file imports the function from pgnParser and gives it the data.
The games directory holds 2 pgn files. One file consists of 2 games of Vishy Anand and the second file consists of a game by me.

The primary purpose of doing this was to brush up on parsing in JS.

## JSON conversion
The way the conversion happens is the following:

- In the pgn file, there are details about the game(s) given in a key-value pair format such as [KEY VALUE] and then the moves played in the game with the result.
- Using special characters like \n and \r, the program parses the pgn file and makes key value pairs in the form of an object.
- For the moves, the program adds in an additional field called "moves" which contain the moves played in the game.
- The final JSON file consists of one field called "games" which is an array that contains the details of the games present in the pgn file. If only one game was in the pgn file, the length of the games array will be 1. If there are n number of games in the pgn file, the length of the array will be n.

## Updates to (potentially) add
- Add an interface to be able to convert games.
- Add more parsers such as json2pgn, fen2json, fen2pgn, etc
- Make a library out of this and rewrite in TypeScript.
