//largest and smallest number find in array


let data=[4,1,10,2,33,9,80,0,231]
let l=data[0];
let s=data[0];

for(let i=1;i<data.length;i++){
       if(data[i]>l){ 
        l=data[i];

       }
       if(data[i]<s){
        s=data[i];
       }
}

console.log(l)

console.log(s)

