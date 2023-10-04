function Merge(arr1, arr2){
var arr3 = [];
for (let i = 0;i < arr1.length;i++){
        if (i % 2 === 0){
            arr3.push(Number(arr1[i]) + Number(arr2[i]))
        }else if(i % 2 !== 0){
            arr3.push(String(arr1[i]) + String(arr2[i]))

        }if (i + 1 < arr1.length){
            arr3.push("-")
        }
}
var arr3 = arr3.join(' ');
console.log(arr3);


}Merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])