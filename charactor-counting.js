function countLetters(string){
  var charCount = {};
  var noSpaces = string.split(' ').join('');//console.log(noSpaces);
  for (var i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];

    if(charCount[letter]){
      charCount[letter] += 1;
    } else {
      charCount[letter] = 1;
    }

  }
  return charCount;
}


console.log(countLetters("lighthouse in the house"));
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }