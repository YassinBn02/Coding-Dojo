
// Print odds 1-20

for(var i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}

// Decreasing Multiples of 3

for(var i=100;i>=0;i--){
    if(i%3==0){
        console.log(i);
    }
}

// Print the sequence

for(var i=4;i>=-3.5;i-=1.5){
    console.log(i);
}

// Sigma

var sum=0;
var summ=""
for(var i=1;i<=100;i++){
    sum+=i;
    summ+=i+"+";
}
console.log(summ+"="+sum);

// Factorial

var pre=1;
var pred=""
for(var i=1;i<=12;i++){
    pre*=i;
    pred+=i+"*";
}
console.log(pred+"="+pre);  
