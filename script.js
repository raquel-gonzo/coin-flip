
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeads = () => {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (attempts > 100) {
                reject(`Coin flips cannot exceed 100.`)
            }
        }
        resolve(`It took ${attempts} tries to flip five "heads"`);
    });

};