// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  var isDC = cardNumber.length === 14 && (cardNumber.substring(0,2) === '38' || cardNumber.substring(0,2) === '39');

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var isAE = cardNumber.length === 15 && (cardNumber.substring(0,2) === '34' || cardNumber.substring(0,2) === '37');

  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  var isV = (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ) && (cardNumber.substring(0,1) === '4');

  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  var isMC = cardNumber.length === 16 && (cardNumber.substring(0,2) === '51' || cardNumber.substring(0,2) === '52' || cardNumber.substring(0,2) === '53' || cardNumber.substring(0,2) === '54' || cardNumber.substring(0,2) === '55');

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  var DPrefix = (cardNumber.substring(0,4) === '6011' || (Number(cardNumber.substring(0,3)) > 643 && Number(cardNumber.substring(0,3)) < 650) || cardNumber.substring(0,2) === '65');
  var isD = DPrefix && cardNumber.length === 16 || cardNumber.length === 19;
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19

  if(isDC){
    return "Diner's Club";
  } else if (isAE){
    return 'American Express';
  } else if(isV){
    return 'Visa';
  } else if(isMC){
    return 'MasterCard';
  } else if(isD){
    return 'Discover';
  } 

};


