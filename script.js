
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["student of Brawijaya University", "beginner programming"];
const el = document.getElementById("typing");

let sleepTime = 50; 
let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
    }
};

writeLoop();