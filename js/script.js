function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    }
    else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

function isVowel(character) {
    let result = false;
    if (character === 'A' || character === 'a' || character === 'E' || character === 'e' || character === 'I' || character === 'i' || character === 'O' || character === 'o' || character === 'U' || character === 'u') {
        result = true;
    }
    return result;
}

function sum(numArray) {
    return numArray.reduce((acc, num) => acc + num, 0);

}
function multiply(numArray) {
    return numArray.reduce((acc, num) => acc * num, 1);
}

function reverse(name) {
    let reverseString = '';
    for (let i = name.length - 1; i >= 0; i--) {
        reverseString += name.charAt(i);
    }
    return reverseString;
}

function findLongestWord(wordsArray) {
    return wordsArray.reduce((acc, word) => word.length > acc ? word.length : acc, 0);
}

function filterLongWords(wordsArray, i) {
    return wordsArray.filter(item => item.length > i);
}


console.log("Expected output of max(1,2) is 2  " + myFunctionTest(2, max(1, 2)));
console.log("Expected output of max(4,2) is 4  " + myFunctionTest(2, max(4, 2)));


console.log("Expected output of maxOfThree(1,2,3) is 3  " + myFunctionTest(3, maxOfThree(1, 2, 3)));
console.log("Expected output of maxOfThree(4,2,5) is 5  " + myFunctionTest(4, maxOfThree(4, 2, 5)));

console.log("Expected output of isVowe('A') is true  " + myFunctionTest(true, isVowel('A')));
console.log("Expected output of isVowel('B') is false  " + myFunctionTest(true, isVowel('B')));

console.log("Expected output of sum([2,4,5]) is 11  " + myFunctionTest(11, sum([2, 4, 5])));
console.log("Expected output of sum([2,4,10]) is 9  " + myFunctionTest(9, sum([2, 4, 10])));

console.log("Expected output of multiply([2,4,5]) is 40  " + myFunctionTest(40, multiply([2, 4, 5])));
console.log("Expected output of multiply([2,4,10]) is 90  " + myFunctionTest(90, multiply([2, 4, 10])));

console.log("Expected output of reverse('Rasik Kunwar') is rawnuK kisaR " + myFunctionTest("rawnuK kisaR", reverse("Rasik Kunwar")));
console.log("Expected output of reverse('Rasik Kunwar') is kisaR rawnuK" + myFunctionTest("kisaR rawnuK", reverse("Rasik Kunwar")));

console.log("Expected output of findLongestWord(['Mike','Jenifier','Lisa','Samuel']) is 8 " + myFunctionTest(8, findLongestWord(['Mike', 'Jenifier', 'Lisa', 'Samuel'])));
console.log("Expected output of findLongestWord(['Mike','Jenifier','Lisa','Samuel']) is 3 " + myFunctionTest(3, findLongestWord(['Mike', 'Jenifier', 'Lisa', 'Samuel'])));


console.log("Expected output of filterLongWords(['Mike','Jenifier','Lisa','Samuel'],4) is ['Jenifier','Samuel'] " + myFunctionTest(JSON.stringify(['Jenifier', 'Samuel']), JSON.stringify(filterLongWords(['Mike', 'Jenifier', 'Lisa', 'Samuel'], 4))));
console.log("Expected output of filterLongWords(['Mike','Jenifier','Lisa','Samuel'],4) is ['Jenifier','Samuel','Mike'] " + myFunctionTest(JSON.stringify(['Jenifier', 'Samuel', 'Mike']), JSON.stringify(filterLongWords(['Mike', 'Jenifier', 'Lisa', 'Samuel'], 4))));

function fiddleMapArray(numArray) {
    return a.map(function (elem, i, array) {
        return elem * 10;
    })
}

function fiddleFilterArray(numArray) {
    return a.filter(function (elem, i, array) {
        return elem === 3;
    });
}
function fiddleReduceArray(numArray){
return a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
}

const a = [1, 3, 5, 3, 3];

console.log("Expected output of fiddleMapArray([1, 3, 5, 3, 3]) is [10,30,50,30,30] " + myFunctionTest(JSON.stringify([10,30,50,30,30]), JSON.stringify(fiddleMapArray(a))));

console.log("Expected output of fiddleFilterArray([1, 3, 5, 3, 3]) is [3,3,3] " + myFunctionTest(JSON.stringify([3,3,3]), JSON.stringify(fiddleFilterArray(a))));


console.log("Expected output of fiddleReduceArray([1, 3, 5, 3, 3]) is 135 " + myFunctionTest(135, fiddleReduceArray(a)));

