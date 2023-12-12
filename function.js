addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
};
// Run time: O(n^2)
// Space complexity: O(1)


// For example:

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// hasUniqueChars = (str) => {
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i + 1; j < str.length; j++) {
//             if(str[i] === str[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
// Run time: O(n^2)
// Space complexity: O(1)


hasUniqueChars = (str) => {
    return new Set(str).size === str.length;
};
// Run time: O(n)
// Space complexity: O(n)



// For example:

// console.log(hasUniqueChars("Monday"));
// // -> True

// console.log(hasUniqueChars("Moonday"));
// // -> False

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

isPangram = (str) => {
    return new Set(str.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
};
// Run time: O(n)
// Space complexity: O(n)



// // For example:

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

// console.log(isPangram("The five boxing wizards jump quickly."));
// //??
// console.log(isPangram("Five or six big jet planes zoomed quickly by the tower."));
// //??

// console.log(isPangram("I like cats, but not mice"));
// // -> False

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

findLongestWord = (arr) => {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
};
// Run time: O(n)
// Space complexity: O(1)



// For example:

// console.log(findLongestWord(["hi", "hello"]));
// // -> 5



