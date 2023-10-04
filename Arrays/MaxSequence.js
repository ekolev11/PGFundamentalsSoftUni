function solve(arr1){
    let result = [];
    let arr = arr1;
    for (i = 0; i < arr.length; i++){

        if (arr[i] === arr[i - 1]){
            result.push(arr[i]);
            result.push(arr[i - 1])
        }
        
        
    }
    console.log(result);

}solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])