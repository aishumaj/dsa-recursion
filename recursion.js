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
  if (arr.length === 1) {
    if (arr[0] === val) {
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


/** binarySearchIndex: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, i = 0) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 1) {
    if (arr[0] === val) {
      return 0 + i;
    }
    else {
      return -1;
    }
  }

  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return middle + i;

  if (arr[middle] > val) {
    return binarySearchIndex(arr.slice(0, middle), val, i);
  }
  if (arr[middle] < val) {
    i = i + Math.ceil(arr.length / 2);
    return binarySearchIndex(arr.slice(middle + 1), val, i);
  }
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


