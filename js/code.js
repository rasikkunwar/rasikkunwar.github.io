function sum(numArray) {
    return numArray.reduce((acc, num) => acc + num, 0);

}
function multiply(numArray) {
    return numArray.reduce((acc, num) => acc * num, 1);
}

function reverse(name) {
    return name.split('').reduce((acc,ch) => ch + acc);
}

function filterLongWords(wordsArray, i) {
    return wordsArray.filter(item => item.length > i);
}