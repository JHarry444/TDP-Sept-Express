const reverseFact = (num) => {
    let fact = 1;

    while (num > 1) {
        num /= fact;
        if (num === 1) return fact + "!";
        fact++;
    }

    return "NONE";
}

module.exports = reverseFact;