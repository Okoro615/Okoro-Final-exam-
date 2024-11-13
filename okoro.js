//Part 1: Class and Objects
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;

    }

    sellProduct(quantity) {
        if (quantity > this.quantity) {
            return "Quantity = " + "Not enough stock";
        }

        this.quantity -= quantity;
        return "Total Stock Price = " + quantity * this.price;
    }

    restockProduct(quantity) {
        this.quantity += quantity;

    }
}
const product1 = new Product("Laptop", 1000, 50);
console.log(product1);

product1.updatePrice(1092);
console.log(product1);

const saleAmount = product1.sellProduct(5);
console.log(saleAmount);
console.log(product1);

product1.restockProduct(10);
console.log(product1);

//Part 2: Arrays & Sets 
//Question 2
function findUniqueWords(words) {
    const uniqueWordsSet = new Set(words);
    return [...uniqueWordsSet];
}

const words = ["Mango", "Pear", "Mango", "orange", "Pear", "Strawberry", "Avocado"];
    const uniqueWords = findUniqueWords(words);
console.log(uniqueWords);

//Question 3
function commonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const intersection = new Set([...set1].filter(x => set2.has(x)));

    return [...intersection];
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const common = commonElements(array1, array2);
console.log(common);

//Part 3: Maps
class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addGrade(studentName, grade) {
        this.grades.set(studentName, grade);
    }

    getGrade(studentName) {
        return this.grades.get(studentName);
    }

    updateGrade(studentName, newGrade) {
        if (this.grades.has(studentName)) {
            this.grades.set(studentName, newGrade);
        } else {
            console.log("Student not found.");
        }
    }

    removeStudent(studentName) {
        this.grades.delete(studentName);
    }
}
const grades = new StudentGrades();

grades.addGrade("John", 85);
grades.addGrade("Jane", 90);
grades.addGrade("Jude", 88);
grades.addGrade("John", 91);

console.log(grades.getGrade("John"));

grades.updateGrade("Jane", 90);
console.log(grades.getGrade("Jane"));

console.log(grades.getGrade("Jude"));

grades.removeStudent("John");
console.log(grades.getGrade("John"));


// Part 4: Cybersecurity

function validatePassword(password) {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 8 && specialCharRegex.test(password);
}

// Example usage:
console.log(validatePassword("password123"));  // Returns false
console.log(validatePassword("P@ssw0rd!"));    // Returns true