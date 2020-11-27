
/*L504 დაწერეთ სკრიპტი რომელიც გამოიტანს ყველა 
ტელეფონის მოდელს ელემენტიდან phone-container
*/
var phoneContainer = document.getElementById("phone-container");

var phoneModels = phoneContainer.getElementsByClassName("model");

var Arr = [];
for(var i = 0 ; i < phoneModels.length ; i++ ){
    Arr.push(phoneModels[i].innerHTML);
}

alert(Arr);