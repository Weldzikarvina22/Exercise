// 1. Get to lowest
function calculateStats(arr: number[]): { lowest: number; highest: number; average: number } {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty.");
    }
    let lowest = arr[0];
    let highest = arr[0];
    let sum = 0;

    for (let num of arr) {
        if (num < lowest) {
            lowest = num;
        }
        if (num > highest) {
            highest = num;
        }
        sum += num;
    }

    const average = sum / arr.length;

    return {
        lowest,
        highest,
        average,
    };
}
const arr1= [12, 5, 23, 18, 4, 45, 32];
const hasil = calculateStats(arr1);
console.log(hasil);

// 2. Array or word
function concatenateWords(arr2: string[]): string {
    const length = arr2.length;

    if (length === 0) {
        return "";
    } else if (length === 1) {
        return arr2[0];
    } else {
        const lastWord = arr2[length - 1];
        const otherWords = arr2.slice(0, length - 1).join(",");
        return `${otherWords}, and ${lastWord}`;
    }
}
const arr2 = ["apple", "banana", "cherry", "date"];
const hasil1 = concatenateWords(arr2);
console.log(hasil1);

// 3. Given array
function secondSmallest(numbers: number[]): number | null {
    const uniqueNumbers = Array.from(new Set(numbers));
    if (uniqueNumbers.length < 2) {
        return null;
    }
    uniqueNumbers.sort((a, b) => a - b);
    return uniqueNumbers[1];
}
const numbers = [5, 3, 1, 7, 2, 6];
const hasil2 = secondSmallest(numbers);
console.log(hasil2);

// 4. Calculate
function sumArrays(arr1: number[], arr2: number[]): number[] {
    if (arr1.length !== arr2.length) {
        throw new Error("Arrays must be of the same length.");
    }
    return arr1.map((value, index) => value + arr2[index]);
}
const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
const hasil3 = sumArrays(array1, array2);
console.log(hasil3);

// 5. Add elemnent
function addUniqueElement(arr4: number[], newElement: number): number[] {
    if (!arr4.includes(newElement)) {
        arr4.push(newElement);
    }
    return arr1; 
}
const arr4= [1, 2, 3, 4];
const newElement1 = 4;
const hasil4= addUniqueElement(arr4, newElement1);
console.log(hasil4);

const arr5= [1, 2, 3, 4];
const newElement2 = 7;
const hasil5= addUniqueElement(arr5, newElement2);
console.log(hasil5);
