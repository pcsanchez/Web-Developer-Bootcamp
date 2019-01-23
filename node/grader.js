function average(arr){
    var total = 0;
    arr.forEach(function(score){
        total+=score;
    });
    return Math.round(total/arr.length);
}

var grades = [90,98,89,100,100,86,94];
console.log(average(grades));