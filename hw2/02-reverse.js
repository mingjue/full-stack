// Enter your code here
function reverseinput(){
    var input =document.getElementById("input").value;  
    var express = new RegExp('^\\d+$');

    
    if(input.match(express)){
        var reverseinput = input.split('').reverse().join("");
        alert("Input: "+ input +"\nOutput: " + reverseinput);
    }
    else{
        alert("something wrong");
    }
}