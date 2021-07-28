function divisorGame(n) {
    let turnsTaken = 0;

    while (n > 0) {
        turnsTaken++;
        if (n === 1) {
            break;
        }

        let x = n - 1;

        while (n % x !== 0) {
            x--;
        }

        n = n - x;
    }

    return doesAliceWin(turnsTaken);
}

function doesAliceWin(turnsTaken) {
    return turnsTaken % 2 === 0;
}

console.log(divisorGame(4));
