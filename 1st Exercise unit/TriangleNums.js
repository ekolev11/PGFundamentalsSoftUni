function triangle(n){
    let arr = [];
    let res = "";
    let counter = 1;
    for(i = 1; i <= n; i++){
        if(i == 1){
            console.log(1);
        }else{
            console.log(res);
            arr = [];
        }
        for(j = 0; j <= i; j++){
            arr.push(i + 1);
            res = arr.join(" ")
            
            
        }
    }

}triangle(5)