var assert = require('assert');
var compressString = require('../1/1.5.js');
var rotateImageBy90Degrees = require('../1/1.6.js');


describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


// 1.5.js

describe('1.5.js', function() {
	describe('#compressString()', function () {
		it('should return a compressed version of input string', function (){
			assert.equal('a2b1c5a3', compressString('aabcccccaaa'));
		});
	});
});


// 1.6.js

// Arrays aren't equatable

describe('1.6.js', function(){
	describe('#rotateImageBy90Degrees()', function(){
		it('should rotate an NxN matrix (in place)', function(){
			assert.equal([
				[1,1,1,1],
				[2,2,2,2],
				[3,3,3,3],
				[4,4,4,4],
				], rotateImageBy90Degrees([
					[1,2,3,4],
					[1,2,3,4],
					[1,2,3,4],
					[1,2,3,4]
					]));
		});
	});
});