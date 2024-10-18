const sampleObject = { 
  red: "#FF0000", 
  green: "#00FF00", 
  white: "#FFFFFF" 
};

function hasKey(key) {
  // Use the 'in' operator to check if the key exists in sampleObject
  return key in sampleObject;
}

// Test cases
console.log(hasKey("red"));   // Output: true
console.log(hasKey("blue"));  // Output: false
console.log(hasKey("white"));
