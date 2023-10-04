function Lists(input){
    const modifiedList = [];
    let originalSum = 0;
    let modifiedSum = 0;
    for(let i = 0; i < input.length;i++){
        let even = 0;
        let odd = 0;
        originalSum += input[i];
        if (input[i] % 2 === 0){
           even = input[i] += i;
           modifiedList.push(even)
           modifiedSum += even;
        }else if(input[i] % 2 !== 0) {
           odd = input[i] -= i;
           modifiedList.push(odd)
           modifiedSum += odd;
        }
    }
    console.log(modifiedList);
    console.log(originalSum);
    console.log(modifiedSum);


}Lists([5, 15, 23, 56, 35])