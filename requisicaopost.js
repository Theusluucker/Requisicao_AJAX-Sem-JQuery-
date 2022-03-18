var xhr = new XMLHttpRequest();
documento = {
    "userId": 1000,
    "id": 1000,
    "name": "Matheus",
    "title": "Requisição Ajax - Metódo Post",
    "body": "criando requisição em Ajax "

}
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr);
    }
}
xhr.open ("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.send(documento);