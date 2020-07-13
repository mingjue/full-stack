// Enter your code here
function fizzbuzz(){
    for(var i = 1; i<=100; i++ ){
        if(i % 3==0){
            document.write(" fizz");
            document.write("<br>");
        }
     else if( i % 5 == 0){
        document.write(" buzz");
        document.write("<br>");
        }
     else if( i % 15 == 0){
        document.write(" fizzbuzz");
        document.write("<br>");
        }
        else{
            document.write(i);
            document.write("<br>");
        }
    }
}

fizzbuzz()