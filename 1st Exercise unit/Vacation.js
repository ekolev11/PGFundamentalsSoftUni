function Vacation(group, type, dayOfWeek){
let totalPrice = 0;
switch(type){
    case "Students":
            if(dayOfWeek === "Friday"){
                totalPrice = group * 8.45;
            }else if(dayOfWeek === "Saturday"){
                totalPrice = group * 9.8;
            }else if(dayOfWeek === "Sunday"){
                totalPrice = group * 10.46;
            }
        if(group >= 30){
            totalPrice = totalPrice - (totalPrice * 0.15);
        }console.log(`Total price: ${totalPrice.toFixed(2)}`);
        break;
    case "Business":
        if(group >= 100){
            group-= 10;
        }   if(dayOfWeek === "Friday"){
                totalPrice = group * 10.9;
            }else if(dayOfWeek === "Saturday"){
                totalPrice = group * 15.6;
            }else if(dayOfWeek === "Sunday"){
                totalPrice = group * 16;
            }console.log(`Total price: ${totalPrice.toFixed(2)}`);
            break;
    case "Regular":
            if(dayOfWeek === "Friday"){
                totalPrice = group * 15;
            }else if(dayOfWeek === "Saturday"){
                totalPrice = group * 20;
            }else if(dayOfWeek === "Sunday"){
                totalPrice = group * 22.5;
            }
        if(group >= 10 && group <= 20){
            totalPrice = totalPrice - (totalPrice * 0.05);
        }console.log(`Total price: ${totalPrice.toFixed(2)}`);
        break;
}
}Vacation(40,"Regular","Saturday")