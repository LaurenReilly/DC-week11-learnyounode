
//EXERCISE 2
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


//EXERCISE 3
// var fs = require('fs');
// var argument = process.argv[2];
// var buffer = fs.readFileSync(argument);
// var string = buffer.toString();
// var splitArray = string.split('\n');
// var length = splitArray.length;
// console.log(length - 1);


//EXERCISE 4
// var fs = require('fs');
// var argument = process.argv[2];

// fs.readFile(argument, function(err, data) {
//     if (err) {
//         console.log(err);   
//     }
//     var lines = data.toString().split('\n').length - 1;
//     console.log(lines);
// });




// EXERCISE 5
// var fs = require('fs');
// var directory = process.argv[2];
// var extension = process.argv[3];

// function listFiles(directory, extension) {
//     fs.readdir(directory, function(err, list) {
//         if (err) {
//             console.log(err);
//         }
//         var filteredFiles = list.filter(word => word.includes("." + extension));
//         filteredFiles.forEach(function(element) {
//             console.log(element);
//         });
//     });
// }

// listFiles(directory, extension);



// EXERCISE 6
// var module1 = require('./module1');
// var directory = process.argv[2];
// var extension = process.argv[3];

// module1(directory, extension, function (err, list) {
//     if (err) {
//         return console.log(err);
//     } else {
//         list.forEach(function(file) {
//             console.log(file);
//         });
//     }
// });




//EXERCISE 7
// var http = require('http');
// var url = process.argv[2];

// http.get(url, function(response) {
//     response.on("data", function(data) {
//         console.log(data.toString('utf8'));
//     });
// });



//EXERCISE 8
// var bl = require('bl');
// var http = require('http');
// var url = process.argv[2];

// http.get(url, function(response) {
//     response.pipe(bl (function(err, data) {
//         if (err) {
//             console.log("ERROR:" + err);
//         } else  {
//             console.log(data.toString('utf8').length);
//             console.log(data.toString('utf8'));
//         }
//     }));
// });


//EXERCISE 9