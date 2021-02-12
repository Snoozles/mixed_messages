//text snippets array
const textSnippets = [
textPart1 = ['always', 'never', 'immediately', 'quickly', 'at some point'],
textPart2 = ['hug', 'lick', 'create', 'fight', 'poke'],
textPart3 = ['your friend', 'a dog', 'your lover', 'a stranger', 'a colleague']];

const randMessage = [];

function pickRandomTextSnippet(textArray) {
    //generate random index within array length
    const randIndex = Math.floor(Math.random() * textArray.length);
    //add phrase at random Index to message
    randMessage.push(textArray[randIndex]);
}
//pick a phrase from each category
for(let i =0; i < textSnippets.length; i++) {
    let randSnippet = pickRandomTextSnippet(textSnippets[i]);
}
//print the wise words to the console
console.log(randMessage.join(' '));