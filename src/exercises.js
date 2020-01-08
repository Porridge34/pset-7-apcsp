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
