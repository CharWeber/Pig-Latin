// Business Logic

let userInput = "apple";
// function pigLatin(word) {
//   let firstLetter = word.charAt(0);
//   if (firstLetter === "e" || firstLetter === "a" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
//     let pigWord = word.concat("way");
//     let splitWordAr = pigWord.split("");
//     splitWordAr.shift();
//     let newWord = splitWordAr.join("");
//     // console.log(newWord);
//   }
//   else if (firstLetter !== "e" || firstLetter !== "a" || firstLetter !== "i" || firstLetter !== "o" || firstLetter !== "u") {
    
//     let splitWordAr = word.split("");
//     let shiftedLetter = splitWordAr.shift();
//     splitWordAr.push(shiftedLetter);
//     let newWord = splitWordAr.join("");
//     let pigWord = newWord.concat("ay");
//     console.log(pigWord)

//   }
// }
function pigLatin(word){
  let vowel = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;
  if (vowel.includes(word[0])){
      // If first letter is a vowel
      return word + "way";
      console.log(word)
    }
  else{
    // If the first letter isn't a vowel i.e is a consonant
      for (let char of word){
        // Loop through until the first vowel is found
        if (vowel.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = word.indexOf(char);
        break;
      }
    }
    // Compose final string
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) +"ay"
  }
}
  











// user logic