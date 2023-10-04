function magic(arr, num){
    let res = [];
    for (i = 0;i < arr.length; i++){
        for (j = i; j < arr.length;j++){
            if (arr[i] + arr[j + 1] === num){
                res.push(arr[i]);
                res.push(arr[j + 1])
                console.log(res.join(" "));
                res = [];
            }
        }
    }

}magic([14, 20, 60, 13, 7, 19, 8],

    27)