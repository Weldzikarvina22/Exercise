// Array 
function singleNumber(name : string, nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result ^= num;  // XOR setiap elemen dalam array
    }
    return result;  // Nilai yang tersisa adalah angka yang hanya muncul sekali
}

console.log(singleNumber, "2,2,1");
console.log(singleNumber('output :', [2, 2, 1])); // Output: 1
console.log(singleNumber, "4,1,2,1,2");
console.log(singleNumber('output :', [4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber, "1");
console.log(singleNumber('output :', [1])); // Output: 1

// excel
function excelColumnToNumber(columnTitle: string): number {
    let columnNumber = 0;
    
    for (const char of columnTitle) {
        const charValue = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        columnNumber = columnNumber * 26 + charValue;
    }
    
    return columnNumber;
}
console.log("Input = A", " ", " Output =", " ", excelColumnToNumber("A"));  // Output 1
console.log("Input = B", " ", " Output =", " ", excelColumnToNumber("B"));   // Output: 2
console.log("Input = C", " ", " Output =", " ", excelColumnToNumber("C"));  // Output: 3
console.log("Input = Z", " ", " Output =", " ", excelColumnToNumber("Z"));   // Output: 26
console.log("Input = AA", " ", " Output =", " ", excelColumnToNumber("AA"));  // Output: 27
console.log("Input = AB", " ", " Output =", " ", excelColumnToNumber("AB"));  // Output: 28

// Anagram
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}

console.log("Input: s = anagram, t = nagaram Output : ", isAnagram("anagram", "nagaram"));  // Output: true
console.log("Input: s = rat, t = car Output : ", isAnagram("rat", "car"));          // Output: false

// Staircase
function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }

    let prev1 = 2;
    let prev2 = 1;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
}

console.log(climbStairs(2));  // Output: 2
console.log(climbStairs(3));  // Output: 3
console.log(climbStairs(4));  // Output: 5 