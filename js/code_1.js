String.prototype.filter = function (...words) {
    return this.split(" ")
        .filter((s) => !words.includes(s))
        .join(" ");
}

console.log("Output after removing words is: " + "This house is not nice!".filter('is', 'not'));

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
};

console.log("The output of Array Bubble Sort is" + [6, 4, 0, 3, -2, 1].bubbleSort());

function Person() { }
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
};

function Teacher() { }
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    return this.name + " is now teaching " + subject;
};
let teacher = new Teacher();
teacher.initialize("John", 28);

console.log(teacher.teach("JavaScript"));