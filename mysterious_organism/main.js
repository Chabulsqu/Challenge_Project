// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  let selectBase;
  let baseToChange;
  let counter = 0;
  let firstCounter = 0;
  let secondCounter = 0;
  let cCounter = 0;
  let gCounter = 0;
  let j = 0;
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      // Mutates a random base
      baseToChange = Math.floor(Math.random() * this.dna.length);
      while (j === 0) {
        selectBase = returnRandBase();
        if (selectBase !== baseToChange) {
          this.dna[baseToChange] = selectBase;
          j++;
        }
      }
      return this.dna;
    },
    compareDNA(obj) {
      // Compares the DNA of two objects
      for (let base of this.dna) {
        if (obj.dna[base] === this.dna[base]) {
          counter += 6.66666666667;
        }
        if (counter >= firstCounter) {
          firstCounter = counter;
        } else if (counter >= secondCounter) {
          secondCounter = counter;
        }
      }
      console.log(firstConter, secondCounter);
      return `specimen #${this.specimenNum} and specimen#${obj.specimenNum} have ${counter}% DNA in common`;
    },
    willLikelySurvive() {
      this.dna.forEach((letter) => {
        if (letter === "C") {
          cCounter += 6.66666666667;
        }
        if (letter === "G") {
          gCounter += 6.66666666667;
        }
      });
      return cCounter >= 60 || gCounter >= 60 ? true : false;
    },
    complementStrand() {
      console.log(this.dna);
      let complementaryStrand = this.dna.map(base => {
        switch (base) {
          case "A":
            base = "T";
            break;
          case "T":
            base = "A";
            break;
          case "C":
            base = "G";
            break;
          case "G":
            base = "C";
            break;
        }
        return base;
      });
      return complementaryStrand;
    },
  };
};

let object;
let newArray = [];
let k = 0;
while (k <= 30) {
  object = pAequorFactory(k, mockUpStrand());
  if (object.willLikelySurvive() === true) {
    newArray.push(object);
    k++;
  }
} 
