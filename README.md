// Describe behavior
1. Test: It will gather input from user (str)
   Code: piglatin("word")
   Expected Output: "word" 
   <!-- const userInput = ("whatever the user inputs") -->

2.  Test: For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o,"   and "u." Don't treat "y" as a vowel.      
    Examples: "away" becomes "awayway" and "okay" becomes "okayway."
    Code: pigLatin("away okay elephant")
    Expected Output: "awayway Okayway elephantway"


3.
    Test: For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."
    Code: piglatin("code")
    Expected outcome: "odecay"

4.
    Test: If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."
    code: pigLatin("queen")
    expected outcome : "eenquay"

5.
    Test: return word to user translated into pig latin
    code: pigLatin("this")
    expected outcome: "isthay"

6.
  Test: return word translated regardless of punctuation or additional non-alphabetical characters
  code: piglatin("hello, this is now translated.)
  expected outcome: "ellohay" 

