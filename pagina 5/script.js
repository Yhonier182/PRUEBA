let tata2 = document.getElementById("tata1");
let tata1 = document.getElementById("tata2");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");


tata2.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "login";
    tata2.classList.add("disable");
    tata1.classList.remove("disable");
}

tata1.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "registro";
    tata2.classList.remove("disable");
    tata1.classList.add("disable");
}