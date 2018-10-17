// Code your solution in this file
function findMatching(arr, str) {
  const result = arr.filter(name => name===str);
  
  for (const element of arr) {
      
        if (element.toUpperCase()===str.toUpperCase() && element!==str) {
          result.push(element);
        }
      }
      return result;
}

function fuzzyMatch(arr, str) {
      result=[];
      for (const element of arr) {
         if(element.startsWith(str)) {
           result.push(element);
         }
      }
  return result;
}

function matchName(arr, str) {
  result={};
  for (const key in arr) {
    if(arr[key].name === str){
      let obj2 = Object.assign(result, arr[key]);
    }
    console.log(obj2);
  }
  // return result;
}