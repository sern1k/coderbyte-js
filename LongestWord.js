function LongestWord(sen) { 
  const arr = sen.match(/[a-z]+/gi);
  const sorted = arr.sort((a, b) => b.length - a.length);
  return sorted[0]; 
}
   
// keep this function call here 
console.log(LongestWord(readline()));