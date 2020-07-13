const url = 'https://restcountries.eu/rest/v2/all';

// Enter your code here
    
fetch(url)
   .then(response => { 
        console.log('Request suceessful', response);

        return response.json();
    })
    .then(data => {
        document.write("<h2>REST Countries</h2>");
        var i =0;
        while(i<250){
        num =  data[i].population.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
        document.write(i+"." +" "+ data[i].name +' - '+ num );
        document.write("<br>")
        i++;
        }
    })
    
    .catch(error => { console.log('Request failed' , error )
    });
    
    
