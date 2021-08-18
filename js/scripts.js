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
  let wordNoPunct = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  word = wordNoPunct;
  // console.log(wordNoPunct);
  let wordAr = word.split("");
  if (vowel.includes(wordAr[0])){
      // If first letter is a vowel
      return word + "way";
      console.log(word);
    }
    else if (word.charAt(0) === "q" && word.charAt(1) === "u"){
      return word.slice(2) + "quay";
    }
    else {
      for (let i=0; i <= word.length; i++){
        if (vowel.includes(word.charAt(i))){
          vowelIndex = i;
          break;
        } 
      }
    }
          // Compose final string
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) +"ay";
    }


  //word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

// for (i=0;i<= word.length; i++){
//   if (vowel.includes(word.charAt(i))){
//     vowelindex = i
//     break
//   }  
//   }
// }









// user logic