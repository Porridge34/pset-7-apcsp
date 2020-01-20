function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }else if (a[0]===b[0] || a[a.length - 1] === b[b.length - 1]){
    return true;
  }else{
    return false;
  }
}

function endsMeet(values, n) {
  if (!values || values.length < n || !isDefined(values)){
    return [];
  }else{
    let newArray = [];
    for (let i = 0; i <n; i++){
      if (values[i] !== undefined){
        newArray.push(values[i]);
      }
    }for (let i = n; i > 0; i--){
      if (values[values.length-i] !== undefined){
        newArray.push(values[values.length-i]);
      }
    }
    return newArray;
  }
}

function difference(numbers) {
  if(!numbers || numbers.length < 1 || !isDefined(numbers)){
    return undefined;
  }else{
    let max = numbers[0];
    let min = numbers[0];
    for (let x = 0; x < numbers.length; x++){
      (numbers[x]>max)?max = numbers[x]:max;
      (numbers[x]<min)?min = numbers[x]:min;
    }
    if(isNumeric(numbers)){
      return max-min
    }else{
      return undefined;
    }
  }
}

function max(number) {
  if(!number || number.length%2 === 0 || number.length < 3 || !isDefined(number)){
    return undefined;
  }else{
    let max = number[0];
    for (let x = number.length-1; x > 0; x-=number.length/2-.5){
      (number[x]>max)?max = number[x]:max;
    }
    if(isNumeric(number)){
      return max;
    }else{
      return undefined;
    }
  }
}

function middle(values) {
  if(!values || values.length%2 === 0 || values.length < 3 || !isDefined(values)){
    return [];
  }else{
    let sum = [];
    for (let x = (values.length+1)/2; x >= (values.length-3)/2; x--){
      sum.unshift(values[x]);
    }
    return sum;
  }
}

function increasing(numbers) {
  if(!numbers || !isNumeric(numbers) || numbers.length < 3 || !isDefined(numbers)){
    return false;
  }else{
    let isTrue = false;
    for (let x = numbers.length-1; x > 0; x--){
      (numbers[x]>numbers[x-1]&& numbers[x-1]>numbers[x-2])? isTrue = true:numbers;
    }
    return isTrue;
  }
}

function everywhere(values, x) {
  if(!values || !x || values.length < 1 || values.lastIndexOf(x)===-1 || !isDefined(values)){
    return false;
  }else{
    let isTrue = true;
    for (let y = values.lastIndexOf(x); y < values.length; y+=2){
      (values[y]!==x)? isTrue = false : isTrue;
    }
    for (let y = values.indexOf(x); y > 0; y-=2){
      (values[y]!==x)? isTrue = false : isTrue;
    }
    for (let x = 0; x < values.length; x++){
      (values[x]===undefined)? isTrue = false : isTrue;
    }
    return isTrue;
  }
}

function consecutive(numbers) {
  if(!numbers || !isNumeric(numbers) || numbers.length < 3  || !isDefined(numbers)){
    return false;
  }else{
    let isTrue = false;
    for (let x = numbers.length-1; x > 0; x--){
      (numbers[x]%2===numbers[x-1]%2 && numbers[x-2]%2===numbers[x]%2)? isTrue = true:numbers;
      (numbers[x]%1!==0)? isTrue = false: isTrue;
    }
    return isTrue;
  }
}

function balance(numbers) {
  if(!numbers || !isNumeric(numbers) || numbers.length < 2 || !isDefined(numbers)){
    return false;
  }else{
    let isTrue = false;
    let rightSum = 0;
    let leftSum = 0;
    for (let x = 0; x < numbers.length; x++){
      let rightSum = 0;
      let leftSum = 0;
      for (let y = numbers.length-1; y > x; y--){
        leftSum += numbers[y];
      }
      for (let y = 0; y <= x; y++){
        rightSum += numbers[y];
      }
      (rightSum===leftSum)? isTrue = true: isTrue;
      (numbers[x]%1!==0)?  x = numbers.length+3: isTrue;
      (x===numbers.length+3)? isTrue = false: isTrue;
    }
    return isTrue;
  }
}

function clumps(values) {
  if (!values || !isDefined(values)){
    return -1;
  }else{
    let clumpCount = 0;
    let storeClump = null;
    for (x = values.length-1; x >=0; x--){
      if(values[x]===values[x-1] && values[x-1]!=storeClump){
        clumpCount++;
        storeClump = values[x];
      }
    }
    return clumpCount;
  }
}

function isNumeric(values) {
  for (let x = 0; x < values.length; x++){
    if (isNaN(values[x])) {
      values=false;
      return false;
    }
  }
  if (values !=false){
    return true;
  }
}

function isDefined(values) {
  for (let x = 0; x < values.length; x++){
    if (values[x]===undefined) {
      values=false;
      return false;
    }
  }
  if (values !=false){
    return true;
  }
}
/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
