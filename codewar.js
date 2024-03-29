//// array differnce
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/
function arrayDiffs(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(a[i]);
    }
  }
  return result;
}
const res = arrayDiffs([1, 2], [1]);
console.log(res);

////// using filter

function arrayDiff(a, b) {
  const subs = a.filter((x) => !b.includes(x));
  return subs;
}

console.log(arrayDiff([1, 2], [1]));
