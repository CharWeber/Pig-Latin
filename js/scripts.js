// Business Logic

let userInput = "bridge";
function pigLatin(word) {
  let firstLetter = word.charAt(0);
  if (firstLetter === "e" || firstLetter === "a" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    let pigWord = word.concat("way");
    let splitWordAr = pigWord.split("");
    splitWordAr.shift();
    let newWord = splitWordAr.join("");
    // console.log(newWord);
  }
  else if (firstLetter !== "e" || firstLetter !== "a" || firstLetter !== "i" || firstLetter !== "o" || firstLetter !== "u") {
    
    let splitWordAr = word.split("");
    let shiftedLetter = splitWordAr.shift();
    splitWordAr.push(shiftedLetter);
    let newWord = splitWordAr.join("");
    let pigWord = newWord.concat("ay");
    console.log(pigWord)

  }
}
let vowel = ["a", "e", "i", "o", "u"];
splitWordAr.forEach(function(letter){
  if (letter === vowel){
    //do nothing
  }else{
    let shiftedLetter = shiftedLetter + splitWordAr.shift();
  }
})











// user logic