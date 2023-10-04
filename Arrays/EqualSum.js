function solve(inputArr){
    let arr = inputArr;
    let totalSum = arr.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    let result = "no";
    
    for (let i = 0; i < arr.length; i++){
        totalSum -= arr[i];

        if(leftSum === totalSum){
            result = Number(i);
            break;
        }
        
        leftSum += arr[i];
        
    }

    console.log(result);

  }solve([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])