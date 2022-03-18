var xhr = new XMLHttpRequest();
var documento;

xhr.responseType = "json"
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        documento = xhr.response;
        // documento = JSON.parse(documento); (Também pode ser escrito dessa forma.)
        console.log(documento);
 
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.send();