function Rounding(number, decimals){
    let num = number;
    if(decimals > 15){
        decimals = 15;
    }if(num.toString().length - 1 <= decimals){
        console.log(parseFloat(num.toFixed(decimals)));
    }else{
        console.log(num.toFixed(decimals));
    }
    

   


}Rounding(3.1415926535897932384626433832795,5)