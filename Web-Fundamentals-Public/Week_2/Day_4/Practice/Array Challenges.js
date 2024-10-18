// always hungry
function alwaysHungry(arr){
    var test=false;
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            test=true;
            console.log("yummy");
        }
    }
    if(!test){
        console.log("im hungry");
    }
}
// High Pass Filter

function HighPass(arr,cutoff){
    var filteredArr=[];
    var j=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr[j]=arr[i];
            j++;
        }
    }
    return filteredArr;
}

// Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    var avg=sum/arr.length
    var count = 0
    for(var i=0;i<arr.length;i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}

// Array Reverse

function reverse(arr) {
    var temp=0;
    for(var i=0;(i<arr.length-1-i);i++){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=1;i<n-1;i++){
        fibArr[i+1]=fibArr[i]+fibArr[i-1];
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
