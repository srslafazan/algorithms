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
    logChars(n, 1);
}

function logChars(n, i){
    if( n - i >= 0 ) { // logging
        var sp = concatCharsOf(' ', n - i);
        var pd = concatCharsOf('#', i);
        console.log(sp + pd);
        i = i + 1;
        logChars(n, i);
    } else {
        return;
    }
}

function concatCharsOf(c, times) {
    var str = "";
    for ( var i = 0 ; i < times ; i++ ){
        str += c;
    }
    return str;
}