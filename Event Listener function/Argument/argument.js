function addNumber(num1,num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = addNumber(3,4,7,25,31);
console.log(result);