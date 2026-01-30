//Factorial of a Number

function fact(n){
let facts=1
    if(n==0){
        return 0
    }
    for(let i=2;i<=n;i++){
        facts=facts*i  
        // facts=  1*2=2, 2*3=6,  6*4= 24, 24*5=120 
     
    }
      return facts
}

console.log(fact(6))