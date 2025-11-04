function lucesycaps() {
    antorchas();
}

function capsLeidos() {
    var i;
    for (i = 1; i <= 100; i++) {
        if (localStorage.getItem("Capitulo" + String(i)) === String(i)) {
            document.getElementById("modal" + String(i)).innerHTML = "Cap&iacute;tulo " + String(i) + " (leído)";
        }
    }
}

function antorchas() {
    setTimeout(function () {
        document.getElementById("izqOff").setAttribute("src", "images/Torch-izqOn.gif");
        document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
        document.getElementById("capitulos").setAttribute("style", "background: linear-gradient(to right, #F2F5A9, #FF8000, black");

        setTimeout(function () {
            document.getElementById("derOff").setAttribute("src", "images/Torch-derOn.gif");
            document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
            document.getElementById("capitulos").setAttribute("style", "background: linear-gradient(to left, #F2F5A9, #FAAC58, #FF8000");

            setTimeout(function () {
                document.getElementById("negrito1").setAttribute("style", "opacity: 1; pointer-events: all");
                document.getElementById("capitulos").setAttribute("style", "background: transparent");
                document.getElementById("kurobodi").setAttribute("style", "background: ''");
            }, 400);
        }, 1000);
    }, 1000);
}

function pergamino(val) {
    $('#mod1').on('hidden.bs.modal', function (e) {
        $("#perg" + val).attr("src", "images/pergaminoquemandose.gif");
        setTimeout(function () {
            document.getElementById("modal" + String(val)).innerHTML = "Cap&iacute;tulo " + String(val) + " (leído)";
        }, 2800);
        localStorage.setItem("Capitulo" + String(val), String(val));
    });
}

function capitulos() {

    for (let x = 1; x <= 20; x++) {
        createElements(x,1);
    }

    for (let x = 21; x <= 40; x++) {
        createElements(x,2);
    }

    for (let x = 41; x <= 60; x++) {
        createElements(x,3);
    }

    for (let x = 61; x <= 80; x++) {
        createElements(x,4);
    }

    for (let x = 81; x <= 100; x++) {
        createElements(x,5);
    }

    for (let x = 101; x <= 120; x++) {
        createElements(x,6);
    }

    for (let x = 121; x <= 122; x++) {
        createElements(x,7);
    }

    capsLeidos();

}

function createElements(x, y) {
    var cap = document.createElement("A");
    var imagen = document.createElement("IMG");
    if(x == 11){
        cap.textContent = "Capítulo " + x + " - Especial Halloween";
    } else {
        cap.textContent = "Capítulo " + x;
    }
    
    cap.setAttribute("class", "list-group-item list-group-item-action list-group-item-dark text-danger mod");
    cap.setAttribute("data-toggle", "modal");
    cap.setAttribute("data-target", "#mod1");
    cap.setAttribute("id", "modal" + x);
    cap.setAttribute("onClick", "fetchgo(" + x + "); pergamino(" + x + ");");
    

    imagen.setAttribute("id", "perg" + x);
    imagen.setAttribute("src", "images/pergaminosinquemar.gif");
    imagen.setAttribute("alt", "pergamino");

    document.getElementById("collapse"+ y).appendChild(cap);
    document.getElementById("modal" + x).appendChild(imagen);
}

function createBar(x){
   
    var div1 = document.createElement("div");
    div1.setAttribute("class", "container-fluid");
    div1.setAttribute("id", "div1");

    var ul1 = document.createElement("ul");
    ul1.setAttribute("class", "nav nav-fill");
    ul1.setAttribute("id", "ul1");

    var li1 = document.createElement("li");
    li1.setAttribute("class", "nav-item");
    li1.setAttribute("id", "li1");

    var li2 = document.createElement("li");
    li2.setAttribute("class", "nav-item");
    li2.setAttribute("id", "li2");

    var li3 = document.createElement("li");
    li3.setAttribute("class", "nav-item");
    li3.setAttribute("id", "li3");

    var li4 = document.createElement("li");
    li4.setAttribute("class", "nav-item");
    li4.setAttribute("id", "li4");

    var a1 = document.createElement("a");
    a1.setAttribute("class", "nav-link text-light dirweb");
    a1.setAttribute("id", "inicio1");
    a1.setAttribute("href", "/index.html");

    var imgf1 = document.createElement("img");
    imgf1.setAttribute("src", "images/espacio.png");
    imgf1.setAttribute("alt", "llama");
    imgf1.setAttribute("id", "fuego1");
    imgf1.setAttribute("style", "display: inline-block");

    var img1 = document.createElement("img");
    img1.setAttribute("src", "images/webp/inicio.webp");
    img1.setAttribute("id", "imginicio");
    img1.setAttribute("alt", "inicio");
    img1.setAttribute("title", "Index");

    var a2 = document.createElement("a");
    a2.setAttribute("class", "nav-link text-light dirweb");
    a2.setAttribute("id", "capitulos1");
    a2.setAttribute("href", "/capitulos.html");

    var imgf2 = document.createElement("img");
    imgf2.setAttribute("src", "images/espacio.png");
    imgf2.setAttribute("alt", "llama");
    imgf2.setAttribute("id", "fuego2");
    imgf2.setAttribute("style", "display: inline-block");

    var img2 = document.createElement("img");
    img2.setAttribute("src", "images/webp/caps.webp");
    img2.setAttribute("id", "imgcaps");
    img2.setAttribute("alt", "caps");
    img2.setAttribute("title", "Chapters");

    var a3 = document.createElement("a");
    a3.setAttribute("class", "nav-link text-light dirweb");
    a3.setAttribute("id", "galeria1");
    a3.setAttribute("href", "/galeria.html");

    var imgf3 = document.createElement("img");
    imgf3.setAttribute("src", "images/espacio.png");
    imgf3.setAttribute("alt", "llama");
    imgf3.setAttribute("id", "fuego3");
    imgf3.setAttribute("style", "display: inline-block");

    var img3 = document.createElement("img");
    img3.setAttribute("src", "images/webp/galeria.webp");
    img3.setAttribute("id", "imggaleria");
    img3.setAttribute("alt", "gallery");
    img3.setAttribute("title", "Gallery");

    var a4 = document.createElement("a");
    a4.setAttribute("class", "nav-link text-light dirweb");
    a4.setAttribute("id", "autor1");
    a4.setAttribute("href", "/autor.html");

    var imgf4 = document.createElement("img");
    imgf4.setAttribute("src", "images/espacio.png");
    imgf4.setAttribute("alt", "llama");
    imgf4.setAttribute("id", "fuego4");
    imgf4.setAttribute("style", "display: inline-block");

    var img4 = document.createElement("img");
    img4.setAttribute("src", "images/webp/sobreautor.webp");
    img4.setAttribute("id", "imgautor");
    img4.setAttribute("alt", "autor");
    img4.setAttribute("title", "Autor");

    document.getElementById("barra").appendChild(div1);

    document.getElementById("div1").appendChild(ul1);

    document.getElementById("ul1").appendChild(li1);
    document.getElementById("ul1").appendChild(li2);
    document.getElementById("ul1").appendChild(li3);
    document.getElementById("ul1").appendChild(li4);

    document.getElementById("li1").appendChild(a1);
    document.getElementById("inicio1").appendChild(imgf1);
    document.getElementById("inicio1").appendChild(img1);
    
    document.getElementById("li2").appendChild(a2);
    document.getElementById("capitulos1").appendChild(imgf2);
    document.getElementById("capitulos1").appendChild(img2);
    
    document.getElementById("li3").appendChild(a3);
    document.getElementById("galeria1").appendChild(imgf3);
    document.getElementById("galeria1").appendChild(img3);
    
    document.getElementById("li4").appendChild(a4);
    document.getElementById("autor1").appendChild(imgf4);
    document.getElementById("autor1").appendChild(img4);

    document.getElementById('textoCaeza').innerHTML = '<p>El último capítulo disponible es: '+x+'</p>';
    document.getElementById('textoCapis').innerHTML = '<p>También disponible en Youtube!</p><p>Atentamente, Blaze.</p>';

    $("#mod1").modal("show");
    
}