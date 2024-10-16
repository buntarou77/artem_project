function pow(x, n){
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x;
    } 
    console.log(result);
    return result;
}
function pow1(x, n){
if(n === 1){ 
    return x;debugger;
}else{
    return x * pow1(x, n - 1);debugger;
}
}
pow1(2, 4);



