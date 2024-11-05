// Global object sampleObject
const sampleObject = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
};

// Function to check if a key exists in sampleObject
function hasKey(key) {
    return key in sampleObject;
}

// Example usage
console.log(hasKey("red"));   // Output: true
console.log(hasKey("blue"));  // Output: false
console.log(hasKey("white")); // Output: true
