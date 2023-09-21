function sumDigits(n){
    let digits = String(n)
    let res = 0;
    let arr = [];
    for(i = 0; i < digits.length; i++){
       arr.push(Number(digits[i]));
    }
   for(j = 0; j < arr.length;j++){
    res += arr[j];

   }
    console.log(res);

}sumDigits(312312)