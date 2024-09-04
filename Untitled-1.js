var i = [
    [11, 12, 13, 14], 
    [21, 22, 23, 24], 
    [31, 32, 33, 34]
];

for (var x in i) {
    for (var y in i[x]) {  
        console.log(i[x][y])
    }
} 