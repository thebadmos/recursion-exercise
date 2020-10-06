/*Write a function called productOfArray which takes in an array of numbers and returns the product of them all
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60*/
function productOfArray(arr){
    if(arr.length===0) return 1;
    return arr.shift() * productOfArray(arr)

}
 
/*Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.*/
function contains(obj,val){
    for(var key in obj){
        if(typeof obj[key]=== 'object'){
            return contains(obj[key],val);
        }
        if(obj[key]=== val){
            return true;
        }
    }
    return false;
}

/*Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.
*/ 
function collectStrings(object) {
  const strArr = []
  function collectStr (obj) {
  for(let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key])
    } else if(typeof obj[key] === 'object') {
      return collectStr(obj[key])
    }
  }
  return strArr;
}

return collectStr(object)
}



/* - Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.
```javascript
search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1
```*/

function search(arr, val) {
  if (arr.length === 0) 
  {
      return -1;
  } 
  else if (arr[0] === val) {
    return 0;
  } else {
    let secopy = search(arr.slice(1), val)
    if (secopy < 0) {
      return secopy
    } else {
      return secopy + 1
    }
  }
}


/*Refactor your search function to use a faster algorithm called binary search [https://www.youtube.com/watch?v=JQhciTuD3E8](https://www.youtube.com/watch?v=JQhciTuD3E8). 

```javascript
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],15) // -1 */
   
function bSearch(array, value, l, r) {
  if (l > r) return -1;
  
  var midPoint = Math.floor((l + r) / 2);
  
  if (value == array[midPoint])
      return midPoint;
  
  else if (value > array[midPoint])
      return bSearch(array, value, midPoint + 1, r);
  
  else
      return bSearch(array, value, l, midPoint - 1);
  }
  
  function binarySearch(array, value) {
      return bSearch(array, value, 0, array.length);
  }