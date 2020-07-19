// Enter your code here
function reverseinput(){
    var input =document.getElementById("input").value;  
    var express = new RegExp('^\\d+$');
    
    if(input.toString().length== 8){
        if(input.match(express)){
            var reverseinput = input.split('').reverse().join("");
            alert("Input: "+ input +"\nOutput: " + reverseinput);
        }
        else{
            alert("something wrong");
        }
    }
    else{
        alert("Need 8 digit number");
    }
}