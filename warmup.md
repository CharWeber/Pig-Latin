tests



1.
Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

vowelcounter(letter)
if letter === "a" || letter ="e" || etc...
 wordcounter ++

2.
Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

vowelcounter(letter)
letter = letter.toLowerCase()
if letter === "a" || letter ="e" || etc...
return true
else
false


3.
Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

add the split to create array

4.
Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

work the same with  test 4

5.
Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

split it
remove the spaces?

6.
Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

to lowercase the str

7.
Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

work similar to test 7

8.
Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

wordcounter = 0
letter.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, " "); 

str.split() = letterArray


letterArray.forEach(function(letter){
  if (letter === alphabet){
    wordCounter ++
  }
})


// HERE IS THE NEW LINE

Describe: vowelCounter();

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0
