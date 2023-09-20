function PrintSum (n1, n2){
    let sum = 0;
    let arr = [];
    for (n1; n1 <= n2; n1++){
        arr.push(n1)
        sum+= n1;
    }
    let res = arr.join(" ")
    console.log(res);
    console.log(`Sum: ${sum}`);
    

}PrintSum(5, 10)