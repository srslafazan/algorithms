// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?

var matrix = [
	[1,2,3,4],
	[1,2,3,4],
	[1,2,3,4],
	[1,2,3,4]
];

function rotateMatrixBy90Degrees(matrix){
	
	var n = matrix[0].length;

	// swap clockwise n + n/2 times

	for ( var layer = 0 ; layer < n/2 ; layer++ ) {
		performSwapsForMatrixWithLayer(layer, matrix, n);
	}

	console.log(matrix);
	return matrix;
}

function performSwapsForMatrixWithLayer(layer, matrix, n){
	for( var i = 0 ; i < n - 1 - layer; i++) {
		swap(matrix[layer][i], matrix[i][n-1-layer]);
	}
}

function swap(a, b){
	var t = a;
	a = b;
	b = a;
}

// -> return [
// 	[1,1,1,1],
// 	[2,2,2,2],
// 	[3,3,3,3],
// 	[4,4,4,4],
// ];


rotateMatrixBy90Degrees(matrix);


// module.exports = rotateImageBy90Degrees;