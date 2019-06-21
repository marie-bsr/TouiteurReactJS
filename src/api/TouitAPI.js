

const URL = "touiteur.cefim-formation.org";

function httpGetMessages(timestamp, callback) {  //callback est une fonction qui attend une autre fonction en parametre
    const request = new XMLHttpRequest(); // objet request //requete que l'on va manipuler via JS
    request.open("GET", "http://" + URL + "/list?ts=" + encodeURIComponent(timestamp), true); //encodeUriComponent est une securité //true car on veut forcer l'asynchrone
    request.addEventListener("readystatechange", function () { // event appelé à chaque fois que la requete va changer, propre à l'objet XMLHttpRequest
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText)); //
        }
    }) //JSONparse transforme en objet json 
    request.send(); // à chaque fois que le readystate change, on appelle une fonction
}



function httpPostMessage(name, message, callback) { 



const requete= new XMLHttpRequest(); 
requete.open("POST","http://" + URL +"/send",true); 
requete.addEventListener("readystatechange", function(){ 
   if (requete.readyState === XMLHttpRequest.DONE && requete.status === 200) {
    callback(JSON.parse(requete.responseText));
   }
   
})

requete.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
requete.send("name="+ encodeURIComponent(name) + "&message=" + encodeURIComponent(message));

//console.log (callback);

}

function httpGetTrending(callback) {
    const request1 = new XMLHttpRequest(); // objet request //requete que l'on va manipuler via JS
    request1.open("GET", "http://" + URL + "/trending", true); //encodeUriComponent est une securité //true car on veut forcer l'asynchrone
    request1.addEventListener("readystatechange", function () { // event appelé à chaque fois que la requete va changer, propre à l'objet XMLHttpRequest
        if (request1.readyState === XMLHttpRequest.DONE && request1.status === 200) {
            callback(JSON.parse(request1.responseText)); //
        }
    }) //JSONparse transforme en objet json 
    request1.send(); // à chaque fois que le readystate change, on appelle une fonction
    console.log (callback);
}

//callback: fonction qui sera à définir
//on fait passer callback en deuxième parametre de la fonction httpGetMessages
//quand échange terminé, on vérifie certaines conditions et on appelle second paramètre (ici:callback)
// (JSON.parse(request.responseText) viendra en paramètre de callback dès qu'on l'appellera





export { httpGetMessages, httpPostMessage, httpGetTrending };

