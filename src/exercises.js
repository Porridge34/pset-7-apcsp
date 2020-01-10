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
  if (values === undefined || values === null || values.length < n){
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
  if(numbers === undefined || numbers === null || numbers.length <= 1){
    return undefined;
  }else{
    let isArrayNaN = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (let x = 0; x < numbers.length; x++){
      (Number.isNaN(numbers[x]))? isArrayNaN = null : x;
      (numbers[x]>max)?max = numbers[x]:max;
      (numbers[x]<min)?min = numbers[x]:min;
    }
    if(isArrayNaN===null){
      return undefined;
    }else{
      return max-min;
    }
  }
}

function max(number) {

}

function middle(values) {

}

function increasing(numbers) {

}

function everywhere(values, x) {

}

function consecutive(numbers) {

}

function balance(numbers) {

  console.log("test");
}

function clumps(values) {

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
