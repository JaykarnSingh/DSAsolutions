//Check whether triangle is valid or not if sides are given


function triangle(a,b,c){
  if(a+b>c && b+c>a && c+a>b){
    return true
  }else{
    return false
  }
}

console.log("valid triangle is",triangle(1,5,2))