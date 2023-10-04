function Rotation(arr1, num){
    var array = arr1;
    for (i = 0;i < num;i++){
        array.push(array.shift(i));
    }
    array = array.join(" ");
    console.log(array);
}Rotation([32, 21, 61, 1], 4
)