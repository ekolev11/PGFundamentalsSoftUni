function Ages(age){
    let years = age;
        if(years < 0){console.log("out of bounds");
        }
        else if (years <= 2){
            console.log("baby");  
        }else if(age <= 13){
            console.log("child");
        }else if(years <= 19){
            console.log("teenager");
        }else if(years <= 65){
            console.log("adult");
        }else if(years >= 65){
            console.log("elder");
        }

}Ages(-1)