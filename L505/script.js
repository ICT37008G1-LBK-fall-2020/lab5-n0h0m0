/*
    L505 დაწერეთ სკრიპტი რომელიც კითხავს მომხმარებელს
    რისი ყიდვა სურს და თუ შეიტანს სიტყვა „laptop“ შეუცვლის ფონს ყველა ლეპტოპს (მწვანე ფერით)
    ხოლო თუ შეიტანს სიტყვა „desktop“ ყველა desktop-ს (ლურჯი ფერით).
*/

var input = prompt("რისი ყიდვა გსურთ ? (laptop , desktop)");

if(input === "laptop"){
    let computers = document.getElementById("pc-container");

    let laptops = computers.children[0];

    laptops.style.background = "green";
}
else if(input === "desktop"){

    let computers = document.getElementById("pc-container");

    let laptops = computers.children[1];

    laptops.style.background = "blue";
}