function solve(arr1){
    let arr = arr1;
    let longestSequence = [];
    let currentSequence = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] === arr[i - 1]){
           currentSequence.push(arr[i]);
           currentSequence.push(arr[i - 1]);
        }else{
            longestSequence = currentSequence;
            currentSequence = [];
        }

        
        
        
    }
    console.log(longestSequence);

}solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])