   let _ = {};

   _.clamp = (number, lower, upper) => {
   if (number <= upper && number >= lower) {
      return number;
   } else if (number < lower) {
      number = lower;
      return number;
   } else if (number > upper) {
      number = upper;
      return number;
   }
   };

   _.inRange = (number, start, end = start) => {
   if (end === start) {
      start = 0;
   }
   if (start > end) {
      [start, end] = [end, start];
   }
   return number < start || number >= end ? false : true;
   };

   _.words = (str) => {
      let words = str.split(" ");
      return words;
   };

   _.pad = (str, length, chars) => {
   if (length < str.length) {
      return str;
   }
   let endSpace = Math.ceil((length - str.length) / 2);
   let startSpace = length - str.length - endSpace;
   let paddedString = ' '.repeat(startSpace) + str + ' '.repeat(endSpace);
   return paddedString;
   };

   _.has = (obj, key) => (obj[key] !== undefined ? true : false);

   _.invert = (obj) => {
   let invertedObj = {};
   for (let key in obj) {
      invertedObj[obj[key]] = key;
   }
   return invertedObj;
   };

   _.findKey = (obj, predicate) => {
   let result;
   for (let key in obj) {
      result = predicate(obj[key]);
      if (result) {
         return key;
      }
   }
   return undefined;
   };

   _.drop = (arr, num = 1) => arr.slice(num);

   // Arrow functions would not work properly here due to this behaviour
   _.dropWhile = function (arr, predicate) {
      let dropNumber = arr.findIndex((element) => (!element ? true : false));
      let droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
   };

   _.chunk = (arr, size = 1) => {
      let newArray = [];
      let numberOfChunks = Math.floor(arr.length / size);
      if (arr.length % size === 0) {
         for (let i = 0; i < arr.length - 1; i += numberOfChunks) {
            newArray.push(arr.slice(i, i + numberOfChunks));
         }
      } else {
         let j = 0;
         while (j < arr.length - (arr.length % size)) {
            newArray.push(arr.slice(j, j + numberOfChunks));
            j += numberOfChunks;
         }
         newArray.push(arr.slice(j, arr.length));
   }
   return newArray;
   };


   // Do not write or modify code below this line.
   module.exports = _;