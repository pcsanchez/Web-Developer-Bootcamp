//print an array in reverse
function printReverse(arr){
    for(var i = arr.length-1;i >= 0;i--){
        console.log(arr[i]);
    }
}

//check if all elements in the array are the same
function isUniform(arr){
    var data = arr[0];
    arr.forEach(function(d){
        if(data !== d){
            return false;
        }
    });

    return true;
}

//return the sum of all numbers
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(data){
        sum += data;
    });
}

function max(arr){
    var maximum = arr[0];
    arr.forEach(function(data){
        if(data > maximum){
            maximum = data;
        }
    });

    return maximum;
}