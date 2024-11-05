// 1.Triangle pattern
function generateNumberTriangle(height: number): string[] {
    const pattern: string[] = [];
    let currentNumber = 1;

    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += (currentNumber < 10 ? '0' : '') + currentNumber + " ";
            currentNumber++;
        }
        pattern.push(row.trim());
    }

    return pattern;
}

const heightNumbers = 4;
const numberTriangle = generateNumberTriangle(heightNumbers);
console.log(numberTriangle.join("\n"));

// 2. Loop
function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(5);
fizzBuzz(15);

// 3. Calculate BMI
function calculateBMI(weight: number, height: number): string {
    if (height <= 0) {
        throw new Error("Height must be greater than 0.");
    }

    const bmi = weight / (height ** 2);

    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}
const weight = 58;
const height = 1.58;
const result1 = calculateBMI(weight, height);
console.log(`BMI category: ${result1}`);

// 4. Remove all odd numbers
function removeOddNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = removeOddNumbers(numbers1);
console.log(evenNumbers);

// 5. Split a string
function splitStringIntoArray(input: string): string[] {
    return input.split(" ");
}
const inputString = "Hello World";
const result2 = splitStringIntoArray(inputString);
console.log(result2);