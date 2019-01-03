function isEven(num){
    return num%2===0;
}

function factorial(num){

    if(num===0){
        return 1;
    }
    var answer = num;
    for(var i = num-1;i >= 1;i--){
        answer *= i;
    }
    return answer;
}

function kebabToSnake(str){
    var newStr = str.replace(/-/g,"_");
    return newStr;
} 