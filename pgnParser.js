function pgn2json(pgn) {

    console.log("PGN: \n\n");
    console.log(pgn);

    console.log("\n\n\nConverting to JSON...\n\n\n");

    let finalJson = {};
    let games = [];
    let pgnTemp =  pgn.split("\r\n\r\n");
    
    if (pgnTemp.length === 1) {
        pgnTemp = pgn.split("\n");
        const convertedData = convertSingleGameData(pgnTemp);
        games.push(convertedData);
        finalJson.games = games;
        return JSON.stringify(finalJson);
    }

    for (let i = 0 ; i <= pgnTemp.length - 2 ; i += 2) {
        const convertedData = convertMultipleGamesData(pgnTemp[i], pgnTemp[i+1]); 
        games.push(convertedData); 
    }

    finalJson.games = games;
    return JSON.stringify(finalJson); 
 
}

function convertSingleGameData(data) {
    let jsonData = { moves: "" };

    for (let i = 0 ; i < data.length ; i++) {

        if (data[i][0] === "[") {
            const metadata = data[i];
            const tmp = metadata.split(`"`);
            tmp.pop();
            const key = tmp[0].split("[").pop().trim();
            const value = tmp[1];

            jsonData[key] = value;
        }
        else {
            jsonData["moves"] = jsonData["moves"].concat(data[i]);
        }
    }

    return jsonData;

}

function convertMultipleGamesData(metadata, moves) {
    
    let jsonData = {};
    
    const metadataTmp = metadata.split("\n");

    for (let i = 0 ; i < metadataTmp.length ; i++) {

        const data = metadataTmp[i];
        const tmp = data.split(`"`);
        tmp.pop();
        const key = tmp[0].split("[").pop().trim();
        const value = tmp[1];
        jsonData[key] = value;

    }

    const movesTmp = moves.replace(/\r\n/g, "")

    jsonData["moves"] = movesTmp;
    return jsonData;
}


module.exports = { pgn2json }
