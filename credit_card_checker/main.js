// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (arr) => {
  let checkDigit = arr.length - 1;
  let newArr = arr.slice(0, checkDigit);
  let counter = arr[checkDigit];
  let i = newArr.length;
  loop: while (i > 0) {
    i--;
    if (i === checkDigit) {
      continue loop;
    }
    if (checkDigit % 2 === 0) {
      if (i % 2 === 1) {
        newArr[i] *= 2;
      }
    } else {
      if (i % 2 === 0) {
        newArr[i] *= 2;
      }
    }
    if (newArr[i] > 9) {
      newArr[i] -= 9;
    }
    counter = counter + newArr[i];
  }
  let modulo = counter % 10;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
};
const findInvalidCards = (nestedArray) => {
  let newArray = [];
  let functionResult;
  for (let j = 0; j < nestedArray.length; j++) {
    functionResult = validateCred(nestedArray[j]);
    if (functionResult === false) {
      newArray.push(nestedArray[j]);
    }
  }
  return newArray;
};

const idInvalidCardCompanies = (invalidCardsArray) => {
  let companiesArray = [];
  for (let k = 0; k < invalidCardsArray.length; k++) {
    switch (invalidCardsArray[k][0]) {
      case 3:
        let companyCounterAmex = 0;
        firstCase: for (
          let company = 0;
          company < companiesArray.length;
          company++
        ) {
          if (companiesArray[company] === "Amex (American Express)") {
            companyCounterAmex+=1;
            break;
          }
        }
        if (companyCounterAmex < 1) {
          companiesArray.push("Amex (American Express)");
        }
        break;
      case 4:
        let companyCounterVisa = 0;
        secondCase: for (
          let company = 0;
          company < companiesArray.length;
          company++
        ) {
          if (companiesArray[company] === "Visa") {
            companyCounterVisa += 1;
            break;
          }
        }
        if (companyCounterVisa < 1) {
          companiesArray.push("Visa");
        }
        break;
      case 5:
        let companyCounterMastercard = 0;
        thirdCase: for (
          let company = 0;
          company < companiesArray.length;
          company++
        ) {
          if (companiesArray[company] === "Mastercard") {
            companyCounterMastercard += 1;
            break;
          }
        }
        if (companyCounterMastercard < 1) {
          companiesArray.push("Mastercard");
        }
        break;
      case 6:
        let companyCounterDiscover = 0;
        fourthCase: for (
          let company = 0;
          company < companiesArray.length;
          company++
        ) {
          if (companiesArray[company] === "Discover") {
            companyCounterDiscover += 1;
            break;
          }
        }
        if (companyCounterDiscover < 1) {
          companiesArray.push("Discover");
        }
        break;
      default:
        console.log("Company not found");
        break;
    }
  }
  return companiesArray;
};
let invalidCards = findInvalidCards(batch);
console.log(idInvalidCardCompanies(invalidCards));
// Passes credit card strings into numbers
function stringToNumbers (string) {
  return parseInt(string);
}
const numbers = '4485795716606000';
if (typeof numbers === 'number') {
  console.log("bamo boca")
}
