// const helloTxt = "Hello, World!";
// for (const ch of helloTxt) {
//     if (ch === ',') {
//         break;
//     }
//     console.log(ch);
// }

//frequency mapping
// function same(a, b) {
//   let obj1 = {};
//   let obj2 = {};
//   for (let key of a) {
//     obj1[key] = (obj1[key] || 0) + 1;
//   }
//   for (let key of b) {
//     obj2[key] = (obj2[key] || 0) + 1;
//   }
//   console.log(obj1);
//   console.log(obj2);
//   for (let key in obj1) {
//     if (!(key ** 2 in obj2)) {
//       return false;
//     }
//     if (obj2[key ** 2] !== obj1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(same([1, 2, 3], [4, 1, 9]));
// function anagram(str1, str2) {
// let arr1 = str1.split("").sort().join("");
// let arr2 = str2.split("").sort().join("");
// console.log(arr1,arr2);

// if (arr1 === arr2) {
//     console.log("true");
// } else {
//     console.log("false");
// }}
// anagram("hello", "oellh");
// anagram("", "");
// anagram("hello", "helloo");


// const map = new Map();
// map.set("name", "John");
// map.set("age", 30);
// map.set("city", "New York");
// console.log(map.has("name")); // true
// console.log(map.get("name")); // John
// console.log(map.size); // 3
/**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//    const num = String(x).split("").reverse().join("") === String(x) ? true : false;
//    console.log(num)
// };
// isPalindrome(-121);

var romanToInt = function(s) {
let map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
let occurrences = {};
let total = 0;
for(let ch of s){
  total += map[ch];
  occurrences[ch] = (occurrences[ch] || 0) + 1;
}
console.log(total);
console.log(occurrences);
return total;
}
romanToInt("IV");





