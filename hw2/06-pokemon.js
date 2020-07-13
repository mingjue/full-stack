const url = 'https://pokeapi.co/api/v2/pokemon/';


// Enter your code here

let getDataAsync = async url =>{
    try{
        let response = await fetch( url );
        let data = await response.json();
        var i=0;
        while(i<20){
        /*
        document.write(data.results[i].name);
        document.write('\n');
        */
        console.log(data.results[i].name);
        var upper = data.results[i].name.charAt(0).toUpperCase()+ data.results[i].name.slice(1);
        var span = document.createElement('span');
        var text = document.createTextNode(upper+ '-\n');

        span.appendChild(text);
        var div=document.getElementById("results");
        div.appendChild(span);
        i++;
        }
    }
    catch(error){
        console.log('Request failed', error);
    }


};
getDataAsync(url);