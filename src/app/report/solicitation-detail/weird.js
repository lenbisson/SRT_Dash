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
    var time = readLine();
    var hour = 0;
    var n = time.search("AM");
    if (n > 0 ) {
        hour = time.slice(0,2);
        min = time.slice(2,8);
        if (hour == "12"){ hour = "00"}
        time = hour.concat(min);
        console.log(time);
    } else {
        hourStr = time.slice(0,2);
        min = time.slice(2,8);
        if (hour != "12")
        { hour = (parseInt(hourStr) + 12);
              hour = hour.toString(); }
        time = hour.concat(min);
        console.log(time);
    }
}