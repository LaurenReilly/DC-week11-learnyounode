
//exercise 2
// var input = process.argv;

// function sum (array) {
//     var sum = 0;
//     for (var i = 2; i < array.length; i++) {
//         var number = parseInt(array[i], 10);
//         sum += number;
//     }
//     return sum;
// }
// console.log(sum(input));

//exercise 3
// var fs = require('fs');
// var argument = process.argv[2];
// var buffer = fs.readFileSync(argument);
// var string = buffer.toString();
// var splitArray = string.split('\n');
// var length = splitArray.length;
// console.log(length - 1);

// Here's the official solution:
//     var fs = require('fs')
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)

 // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

//exercise 4

// var fs = require('fs');
// var argument = process.argv[2];

// fs.readFile(argument, function(err, data) {
//     if (err) {
//         console.log(err);   
//     }
//     var lines = data.toString().split('\n').length - 1;
//     console.log(lines);
// });

//exercise 5

var fs = require('fs');
var directory = process.argv[2];
var extension = process.argv[3];

function listFiles(directory, extension) {
    fs.readdir(directory, function(err, list) {
        if (err) {
            console.log(err);
        }
        var filteredFiles = list.filter(word => word.includes("." + extension));
        filteredFiles.forEach(function(element) {
            console.log(element);
        });
    });
}

listFiles(directory, extension);