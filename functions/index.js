const functions = require("firebase-functions");


// Import function modules
const testModule = require("./cloudFunctions/testModule")


// Export function
exports.testFunction = testModule.testFunction;
