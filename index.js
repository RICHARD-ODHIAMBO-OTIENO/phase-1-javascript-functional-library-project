// create myEach function 
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // create myMap fuction
  function myMap(collection, callback) {
    let result = [];
    myEach(collection, function(element) {
      result.push(callback(element));
    });
    return result;
  }
  
  // create myReduce function
  function myReduce(collection, callback, acc) {
    myEach(collection, function(element) {
      if (acc === undefined) {
        acc = element;
      } else {
        acc = callback(acc, element);
      }
    });
    return acc;
  }
  
  // create myFind function 
  function myFind(collection, predicate) {
    let result;
    myEach(collection, function(element) {
      if (predicate(element) && !result) {
        result = element;
      }
    });
    return result;
  }
  
  // create myFilter function
  function myFilter(collection, predicate) {
    let result = [];
    myEach(collection, function(element) {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  // create mySize function
  function mySize(collection) {
    let count = 0;
    myEach(collection, function() {
      count++;
    });
    return count;
  }
  
  // create myFirst function
  function myFirst(array, n) {
    if (n) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
  }
  
  // create myLast function
  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
  }
  
  // craete myKeys function
  function myKeys(object) {
    let keys = [];
    myEach(object, function(value, key) {
      keys.push(key);
    });
    return keys;
  }
  
  // create myValues function
  function myValues(object) {
    let values = [];
    myEach(object, function(value) {
      values.push(value);
    });
    return values;
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  