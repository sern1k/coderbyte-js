function FirstReverse(str) { 
  const splited = str.split("");
  const reversed = splited.reverse();
  const joined = reversed.join("");
  return joined;
}
   
// keep this function call here 
console.log(FirstReverse(readline()));