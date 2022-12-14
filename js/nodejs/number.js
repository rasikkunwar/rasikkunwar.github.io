const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
let sum = 0;


function getNumber() {
    readline.question('Please enter the number ', number => {
        if (number === 'stop') {
            console.log("Sum: " + sum);
            return readline.close();

        }
        sum += parseInt(number);
        getNumber();
    });

}
getNumber();