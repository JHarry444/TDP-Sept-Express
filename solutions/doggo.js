const doggoCompetition = (place) => {
    const places = [];

    for (let i = 1; i <= 100; i++) {
        if (i === place) continue; // skips to next iteration

        let placeString = ""  + i;

        if (i % 10 === 1 && i !== 11) placeString += "st";
        else if(i % 10 == 2 && i !== 12) placeString += "nd";
        else if(i % 10 == 3 && i !== 13) placeString += "rd";
        else placeString += "th";

        places.push(placeString);
    }

    return places;
}

module.exports = doggoCompetition;