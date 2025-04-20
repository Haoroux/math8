// questions
let wichDef = 1;
let wichCardSide = 0;

// data for the questions
const THRMTxt = [0, "Deux angles opposés par le sommet sont égaux.",
    "Les angles correspondants formés par deux droites parallèles sont égaux, et réciproquement.",
    "Les angles internes formés par deux droites parallèles et une sécante sont supplémentaires, et réciproquement.",
    "Deux droites parallèles forment, avec une sécante, des angles alternes internes égaux, et réciproquement.",
    "Si deux angles adjacents sont supplémentaires, leurs côtés non communs sont alignés.",
    "Lorsque deux angles égaux ont le même sommet et deux de leurs côtés alignés, si les autres côtés sont situés de part et d’autre de la ligne droite, alors ces côtés sont aussi alignés.",
    "Deux angles dont les côtés sont perpendiculaires sont égaux ou supplémentaires.",
    "Les bissectrices intérieure et extérieure d’un angle sont perpendiculaires.",
    "La somme des amplitudes des angles d’un triangle est égale à 180°.",
    "L’amplitude d’un angle extérieur d’un triangle est égale à la somme des amplitudes des angles intérieurs non adjacents.",
    "Un triangle isocèle a deux angles égaux, et réciproquement.",
    "Un triangle isocèle admet un axe de symétrie, et réciproquement. Cet axe est à la fois bissectrice, hauteur, médiatrice et médiane.",
    "La droite passant par le milieu d’un côté d’un triangle et parallèle à un autre côté passe par le milieu du troisième côté.",
    "Le segment défini par les milieux de deux côtés d’un triangle est parallèle au troisième côté et mesure la moitié de celui-ci.",
    "Dans un triangle, un côté est toujours inférieur à la somme des deux autres côtés.",
    "Par un point extérieur à une droite, on peut mener la perpendiculaire et des obliques.",
    "Tout diamètre d’un cercle est un axe de symétrie du cercle, et réciproquement. \nConséquences : \n1) Toute perpendiculaire à une corde passant par son milieu est un diamètre. \n2) L’intersection d’un diamètre perpendiculaire à une corde avec cette corde est son milieu. \n3) Tout diamètre passant par le milieu d’une corde est perpendiculaire à cette corde.",
    "Si l’on joint les extrémités d’un diamètre AB à un point C sur le cercle, alors AC est perpendiculaire à AB.",
    "Pour tous points A, B, C appartenant au cercle (O, r), si AC est perpendiculaire à BC, alors AB est un diamètre.",
    "Dans un même cercle, ou dans des cercles de même rayon, des arcs égaux sont interceptés par des angles au centre égaux et sont sous-tendus par des cordes égales.",
    "Le diamètre perpendiculaire à une corde partage les deux arcs sous-tendus en deux parties égales.",
    "Dans un cercle : \n1) Deux cordes égales sont également éloignées du centre. \n2) Une corde plus grande est plus proche du centre.",
    "Un angle inscrit a une amplitude égale à la moitié de l’arc intercepté.",
    "L’amplitude d’un angle formé par une corde et une tangente à un cercle est égale à la moitié de la mesure de l’arc intercepté par la corde.",
    "L’amplitude d’un angle formé par deux cordes qui se coupent à l’intérieur d’un cercle est égale à la demi-somme des mesures des arcs compris entre ses côtés.",
    "L’amplitude d’un angle formé par deux cordes qui se coupent à l’extérieur d’un cercle est égale à la demi-différence des mesures des arcs compris entre ses côtés.",
    "Deux triangles sont égaux lorsqu’ils ont : \n1) un côté égal adjacent à deux angles respectivement égaux ; \n2) un angle égal compris entre deux côtés respectivement égaux ; \n3) les trois côtés respectivement égaux.",
    "Deux triangles rectangles sont égaux lorsqu’ils ont (théorème 2\n7) ou : \n1) l’hypoténuse et un côté de l’angle droit respectivement égaux ; \n2) l’hypoténuse égale et un angle non droit respectivement égal.",
    "La somme des amplitudes des angles intérieurs d’un polygone convexe est égale à (n - 2) × 180°, où n est le nombre de côtés (360° pour un quadrilatèr\ne).",
    "Les côtés opposés d’un parallélogramme sont égaux. Réciproquement, si deux côtés opposés d’un quadrilatère convexe sont égaux et parallèles, alors c’est un parallélogramme.",
    "Les diagonales d’un parallélogramme se coupent en leur milieu. Réciproquement, si les diagonales d’un quadrilatère convexe ont le même milieu, c’est un parallélogramme.",
    "Les angles opposés d’un parallélogramme sont égaux. Réciproquement...",
    "Les diagonales d’un rectangle sont égales. Réciproquement, tout parallélogramme dont les diagonales sont égales est un rectangle.",
    "Les diagonales d’un losange sont perpendiculaires. Réciproquement, tout parallélogramme dont les diagonales sont perpendiculaires est un losange.",
    "Un quadrilatère convexe est inscrit dans un cercle si et seulement si ses angles opposés sont supplémentaires.",
    "Un quadrilatère non convexe est inscrit dans un cercle si et seulement si ses angles opposés sont égaux.",
    "Un quadrilatère convexe est circonscrit à un cercle si et seulement si les sommes des longueurs des côtés opposés sont égales.",
    "Deux triangles sont semblables lorsqu’ils ont : \n1) leurs côtés respectivement parallèles ; \n2) deux angles égaux ; \n3) un angle égal compris entre des côtés proportionnels ; \n4) les trois côtés proportionnels.",
    "Un faisceau de droites parallèles détermine, sur des sécantes, des segments homologues proportionnels."
];


// html elements
let card = document.getElementById("card");
let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");
let AonB =document.getElementById("AOnB")

function showImage(index) {
    card.innerHTML = ""; // vide la carte
    AonB.innerHTML = ""
    if (wichCardSide == 0){
        let text = document.createElement("pre"); // Utilisation de <pre> pour garder les sauts de ligne
        text.textContent = String(THRMTxt[index]); // THRMTxt est ton tableau contenant les "\n"
        text.style.whiteSpace = "pre-wrap"; // garde les \n et autorise les retours à la ligne
        text.style.wordBreak = "break-word"; // coupe les mots si besoin pour éviter tout débordement
        text.style.overflow = "hidden";     // (optionnel) cache tout débordement
        text.style.maxWidth = "100%";       // s’assure qu’il reste dans sa boîte
        
        card.appendChild(text);
    }else{
        if (index === 15 || index === 19) {
            let text = document.createElement("div");
            text.textContent = `Texte spécial pour l'index ${index}`;
            text.style.fontSize = "1.5rem";
            text.style.textAlign = "center";
            card.appendChild(text);
        } else {
            let img = document.createElement("img");
            img.src = `imgTHRM/THRM${index}.jpg`;
            img.style.maxWidth = "100%";
            card.appendChild(img);
        }

    }
    AonB.append(`${index}/39`)
}


// bouton "suivant"
nextBtn.addEventListener("click", () => {
    if (wichDef < 39) {
        wichDef++;
    } else {
        wichDef = 1;
    }
    showImage(wichDef);
});

// bouton "précédent"
previousBtn.addEventListener("click", () => {
    if (wichDef > 1) {
        wichDef--;
    } else {
        wichDef = 39;
    }
    showImage(wichDef);
});


//retournement de carte
card.addEventListener("click", () => {
    if (wichCardSide == 0) {
        wichCardSide = 1
    } else {
        wichCardSide = 0
    }
    showImage(wichDef);
});

// afficher la première image
showImage(wichDef);
