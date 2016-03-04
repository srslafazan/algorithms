// Given a square matrix of size N×NN×N, calculate the absolute difference between the sums of its diagonals.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var abs = absoluteValueAfterDiff(getPrimaryDiagonalLength(a, n), getSecondaryDiagonalLength(a, n));
    
    console.log(abs);
}

function getPrimaryDiagonalLength(matrix, len){
    var sum = 0;
    for ( var i in matrix ) {
        sum += matrix[i][i];
    }
    return sum;
}
function getSecondaryDiagonalLength(matrix, len){
    var sum = 0;
    for ( var i in matrix ) {
        sum += matrix[i][len-i-1];
    }
    return sum;
}
function absoluteValueAfterDiff(a, b){
    return a - b > 0 ? a - b : ( a - b ) * -1;
}