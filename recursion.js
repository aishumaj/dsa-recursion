/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case -> empty array
  //nums[0]* product(nums.slice(1))

  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //let longestWord = 0;
  //base case: empty array, return longestWord??

  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case: string length = 0
  // progress: string[0] + string.slice(2)

  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  //base case: empty array -> return false
  // progress: return val === arr[0] ? true : find(arr.slice(1))

  if (arr.length === 0) return false;
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base:
  //fail fast: if first letter /= last letter fail
  //pass: if length <2 success
  //progress: isPalindrom(str.slice(1, str.length-1))

  if (str[0] !== str[str.length - 1]) return false;
  if (str.length <= 1) return true;

  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case when string length is zero
  // return the last leter of the word + word - lastleter
  // str[length -1] + 0 -length -1]
  if (str === "") return str;

  return str[str.length - 1] + revString(str.slice(0, str.length - 1));



}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {

  if (i === arr.length) return -1;

  if (val === arr[i]) return i;

  return findIndex(arr, val, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {

  for (let key in obj) {

    if (typeof obj[key] === 'object') {
      gatherStrings(obj[key], out);
    } else if (typeof obj[key] === 'string') {
      out.push(obj[key]);
    }
  }

  return out;
}


// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  // base case array.length = 0 1
  debugger;
  if (arr.length === 2) {
    if (arr[0] === val || arr[1] === val) {
      return true;
    }
    else {
      return false;
    }
  }

  if (arr.length === 0) return false;

  let left = 0;

  let right = arr.length - 1;

  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return true;



  if (arr[middle] > val) {
    return binarySearch(arr.slice(0, middle), val);
  }
  if (arr[middle] < val) {
    return binarySearch(arr.slice(middle + 1), val);
  }


}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};


// //
// function binarySearch(sorted, sought) {
//   /*

//   Begin with the mid element of the whole array as a search key.
//  If the value of the search key is equal to the item then return an index of the search key.
//  Or if the value of the search key is less than the item in the middle of the interval,
//   narrow the interval to the lower half.
//  Otherwise, narrow it to the upper half.
//  Repeatedly check from the second point until the value is found or the interval is empty.*/

//   let left = 0;

//   let right = sorted.length - 1;

//   while (left <= right) {
//     // middle index of sorted
//     let middle = Math.floor((left + right) / 2);

//     // if middle value < sought then all lower indexes are discarded
//     // by setting the left most index to middle + 1
//     if (sorted[middle] < sought) left = middle + 1;
//     // if middle value is greater than sought, than everything after middle
//     // can be discarded
//     else if (sorted[middle] > sought) right = middle - 1;
//     // If it aint greater than or lower than we have a winner
//     else return middle;
//   }
//   return -1;
// }

