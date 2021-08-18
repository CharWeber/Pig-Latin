// Business Logic

function pigLatin(word){
  let vowel = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;
  console.log(word)
  let wordNoPunct = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
  word = wordNoPunct;
  // console.log(wordNoPunct);
  let wordAr = word.split("");
  if (vowel.includes(wordAr[0])){
      // If first letter is a vowel
      return word + "way";
      console.log(word);
    }
    else if (word.charAt(0) === "q" && word.charAt(1) === "u"){
      // if first 2 letters are qu
      return word.slice(2) + "quay";
    }
    else { // if first letter is constanent
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

// var.replace(/[^0-9a-z]/gi, "").toLowerCase(); 







// user logic