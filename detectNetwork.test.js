/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  it('has a prefix of 38 and a length of 14', function() {
    
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901235') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  // The American Express network always starts with a 34 or 37 and is 15 digits long

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  var expect = chai.expect;
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  it('has a prefix of 6011 and a length of 16', function(){
    expect(detectNetwork('6011213045655665')).to.equal('Discover');
  } );
  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011213045655665385')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441213833258965')).to.equal('Discover');
  });

   it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451213833258965')).to.equal('Discover');
  });

   it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461213833258965')).to.equal('Discover');
  });

   it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471213833258965')).to.equal('Discover');
  });

   it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481213833258965')).to.equal('Discover');
  });

   it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491213833258965')).to.equal('Discover');
  });

   it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6551213035658965837')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6551213833258965')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  var expect = chai.expect;

 it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501821384565')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018213845650')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50182138456502')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501821384565026')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018213845650261')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50182138456502614')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501821384565026148')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018213845650261489')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502021384565')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020213845650')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50202138456502')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502021384565026')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020213845650261')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50202138456502614')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502021384565026148')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020213845650261489')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503821384565')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038213845650')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50382138456502')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503821384565026')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038213845650261')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50382138456502614')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503821384565026148')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038213845650261489')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630421384565')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304213845650')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63042138456502')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630421384565026')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304213845650261')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63042138456502614')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630421384565026148')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304213845650261489')).to.equal('Maestro');
  });

});

describe('should support China UnionPay', function(){
  var expect = chai.expect;

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

  for (var i = 622126; i < 622925; i++) {
    (function(i) {
      it('has a prefix of ' + i.toString() + ' and a length of 16', function() {
        expect(detectNetwork(i.toString() + '1849705837')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + i.toString() + ' and a length of 17', function() {
        expect(detectNetwork(i.toString() + '18497058378')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + i.toString() + ' and a length of 18', function() {
        expect(detectNetwork(i.toString() + '184970583785')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + i.toString() + ' and a length of 19', function() {
        expect(detectNetwork(i.toString() + '1849705837856')).to.equal('China UnionPay');
      });
    })(i)
    
  };

  it('has a prefix of 622925 and a length of 16', function() {
    expect(detectNetwork('6229253845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 622925 and a length of 17', function() {
    expect(detectNetwork('62292538456502613')).to.equal('China UnionPay');
  });
  it('has a prefix of 622925 and a length of 18', function() {
    expect(detectNetwork('622925384565026134')).to.equal('China UnionPay');
  });
  it('has a prefix of 622925 and a length of 19', function() {
    expect(detectNetwork('6229253845650261345')).to.equal('China UnionPay');
  });

   it('has a prefix of 624 and a length of 16', function() {
    expect(detectNetwork('6244213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 624 and a length of 17', function() {
    expect(detectNetwork('62442138456502613')).to.equal('China UnionPay');
  });
  it('has a prefix of 624 and a length of 18', function() {
    expect(detectNetwork('624421384565026134')).to.equal('China UnionPay');
  });
  it('has a prefix of 624 and a length of 19', function() {
    expect(detectNetwork('6244213845650261345')).to.equal('China UnionPay');
  });

  it('has a prefix of 625 and a length of 16', function() {
    expect(detectNetwork('6254213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 625 and a length of 17', function() {
    expect(detectNetwork('62542138456502613')).to.equal('China UnionPay');
  });
  it('has a prefix of 625 and a length of 18', function() {
    expect(detectNetwork('625421384565026134')).to.equal('China UnionPay');
  });
  it('has a prefix of 625 and a length of 19', function() {
    expect(detectNetwork('6254213845650261345')).to.equal('China UnionPay');
  });

  it('has a prefix of 626 and a length of 16', function() {
    expect(detectNetwork('6264213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 626 and a length of 17', function() {
    expect(detectNetwork('62642138456502613')).to.equal('China UnionPay');
  });
  it('has a prefix of 626 and a length of 18', function() {
    expect(detectNetwork('626421384565026134')).to.equal('China UnionPay');
  });
  it('has a prefix of 626 and a length of 19', function() {
    expect(detectNetwork('6264213845650261345')).to.equal('China UnionPay');
  });


  it('has a prefix of 6282 and a length of 16', function() {
    expect(detectNetwork('6282213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6282 and a length of 17', function() {
    expect(detectNetwork('62822138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6282 and a length of 18', function() {
    expect(detectNetwork('628221384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6282 and a length of 19', function() {
    expect(detectNetwork('6282213845650261478')).to.equal('China UnionPay');
  });

  it('has a prefix of 6283 and a length of 16', function() {
    expect(detectNetwork('6283213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6283 and a length of 17', function() {
    expect(detectNetwork('62832138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6283 and a length of 18', function() {
    expect(detectNetwork('628321384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6283 and a length of 19', function() {
    expect(detectNetwork('6283213845650261478')).to.equal('China UnionPay');
  });

  it('has a prefix of 6284 and a length of 16', function() {
    expect(detectNetwork('6284213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6284 and a length of 17', function() {
    expect(detectNetwork('62842138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6284 and a length of 18', function() {
    expect(detectNetwork('628421384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6284 and a length of 19', function() {
    expect(detectNetwork('6284213845650261478')).to.equal('China UnionPay');
  });

  it('has a prefix of 6285 and a length of 16', function() {
    expect(detectNetwork('6285213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6285 and a length of 17', function() {
    expect(detectNetwork('62852138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6285 and a length of 18', function() {
    expect(detectNetwork('628521384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6285 and a length of 19', function() {
    expect(detectNetwork('6285213845650261478')).to.equal('China UnionPay');
  });

  it('has a prefix of 6286 and a length of 16', function() {
    expect(detectNetwork('6286213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6286 and a length of 17', function() {
    expect(detectNetwork('62862138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6286 and a length of 18', function() {
    expect(detectNetwork('628621384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6286 and a length of 19', function() {
    expect(detectNetwork('6286213845650261478')).to.equal('China UnionPay');
  });

  it('has a prefix of 6287 and a length of 16', function() {
    expect(detectNetwork('6287213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6287 and a length of 17', function() {
    expect(detectNetwork('62872138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6287 and a length of 18', function() {
    expect(detectNetwork('628721384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6287 and a length of 19', function() {
    expect(detectNetwork('6287213845650261478')).to.equal('China UnionPay');
  });

  it('has a prefix of 6288 and a length of 16', function() {
    expect(detectNetwork('6288213845650261')).to.equal('China UnionPay');
  });
  it('has a prefix of 6288 and a length of 17', function() {
    expect(detectNetwork('62882138456502614')).to.equal('China UnionPay');
  });
  it('has a prefix of 6288 and a length of 18', function() {
    expect(detectNetwork('628821384565026147')).to.equal('China UnionPay');
  });
  it('has a prefix of 6288 and a length of 19', function() {
    expect(detectNetwork('6288213845650261478')).to.equal('China UnionPay');
  });

});

describe('should support Switch', function(){
  var expect = chai.expect;
  
  it('has a prefix of 4903 and a length of 16', function(){
    expect(detectNetwork('4903284857392857')).to.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 18', function(){
    expect(detectNetwork('490328485739285723')).to.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 19', function(){
    expect(detectNetwork('4903284857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 4905 and a length of 16', function(){
    expect(detectNetwork('4905284857392857')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function(){
    expect(detectNetwork('490528485739285723')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function(){
    expect(detectNetwork('4905284857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 4911 and a length of 16', function(){
    expect(detectNetwork('4911284857392857')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function(){
    expect(detectNetwork('491128485739285723')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function(){
    expect(detectNetwork('4911284857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 4936 and a length of 16', function(){
    expect(detectNetwork('4936284857392857')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function(){
    expect(detectNetwork('493628485739285723')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function(){
    expect(detectNetwork('4936284857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 564182 and a length of 16', function(){
    expect(detectNetwork('5641824857392857')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function(){
    expect(detectNetwork('564182485739285723')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function(){
    expect(detectNetwork('5641824857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 633110 and a length of 16', function(){
    expect(detectNetwork('6331104857392857')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function(){
    expect(detectNetwork('633110485739285723')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function(){
    expect(detectNetwork('6331104857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 6333 and a length of 16', function(){
    expect(detectNetwork('6333104857392857')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function(){
    expect(detectNetwork('633310485739285723')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function(){
    expect(detectNetwork('6333104857392857237')).to.equal('Switch');
  });
  
  it('has a prefix of 6759 and a length of 16', function(){
    expect(detectNetwork('6759104857392857')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function(){
    expect(detectNetwork('675910485739285723')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function(){
    expect(detectNetwork('6759104857392857237')).to.equal('Switch');
  });
});
