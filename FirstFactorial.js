function FirstFactorial(num) { 
  let answer = 1;
  do {
    answer = answer * num;
    num = num - 1;
  } while (num > 1)
  return answer; 
}
   
// keep this function call here 
console.log(FirstFactorial(readline()));