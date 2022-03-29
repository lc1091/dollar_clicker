//Initialisation
let resultat = 0;

let resultatenk = resultat / 1000;

let nombredollarparsecondeaffichable = 0;

function calcul(dollar, milliseconde){
    milliseconde = (1 / dollar) * 1000
    return milliseconde
}

//Affichage

if(resultat >= 1000){
    document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
} else {
    document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
};

setTimeout(opacityverification, 0)

//Ajout par clic
let dollarpour1clic = 1;

function add(){
    resultat += dollarpour1clic;
    resultatenk += dollarpour1clic / 1000;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    opacityverification();
};

//Nombre d'ajout par clic
let prixdedollarpar1clic = 50;
let prixdedollarpar1clicenk = prixdedollarpar1clic / 1000;

if(prixdedollarpar1clic < 1000){
    document.getElementById("prixdudollarparclic").innerHTML = `${prixdedollarpar1clic}`;
} else {
    document.getElementById("prixdudollarparclic").innerHTML = `${prixdedollarpar1clicenk.toFixed(2)} k$`;
};

document.getElementById("dollarparclic").innerHTML = `${dollarpour1clic}$ / clic`;


function dollarparclic(){
    if(resultat >= prixdedollarpar1clic){
    dollarpour1clic ++;
    resultat -= prixdedollarpar1clic;
    resultatenk -= prixdedollarpar1clic / 1000;
    document.getElementById("dollarparclic").innerHTML = `${dollarpour1clic}$ / clic`;
    prixdedollarpar1clic += Math.round(0.70 * prixdedollarpar1clic);
    prixdedollarpar1clicenk += Math.round(0.70 * prixdedollarpar1clic) / 1000;
    document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    if(prixdedollarpar1clic < 1000){
        document.getElementById("prixdudollarparclic").innerHTML = `${prixdedollarpar1clic}`;
    } else {
        document.getElementById("prixdudollarparclic").innerHTML = `${prixdedollarpar1clicenk.toFixed(2)} k$`;
    };
    }
    opacityverification();
};

//Ajout automatique 1

let nombredeargentdepoche = 0;
let prixdelajoutauto1 = 10;
let prixdelajoutauto1enk = prixdelajoutauto1 / 1000;

if(prixdelajoutauto1 < 1000){
    document.getElementById("prixdelajoutauto1").innerHTML = `${prixdelajoutauto1}`;
} else {
    document.getElementById("prixdelajoutauto1").innerHTML = `${prixdelajoutauto1enk.toFixed(2)} k`;
};

function argentdepoche(){
    if(resultat >= prixdelajoutauto1){
    setTimeout(argentdepocheactive, 0);
    nombredeargentdepoche ++;
    document.getElementById("nombreargentdepoche").innerHTML = `Déjà acheté : ${nombredeargentdepoche}`;
    resultat -= prixdelajoutauto1;
    resultatenk -= prixdelajoutauto1 / 1000;
    prixdelajoutauto1 += Math.round(prixdelajoutauto1 / 10);
    prixdelajoutauto1enk += Math.round(prixdelajoutauto1 / 10) / 1000;
    if(prixdelajoutauto1 < 1000){
        document.getElementById("prixdelajoutauto1").innerHTML = `${prixdelajoutauto1}`;
    } else {
        document.getElementById("prixdelajoutauto1").innerHTML = `${prixdelajoutauto1enk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 0.5;
    };
    opacityverification()
};

function argentdepocheactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(argentdepocheactive, calcul(0.5));
    
    opacityverification()
};

//baby sitting
let nombredebabysitting = 0;
let prixdelajoutbaby = 200;
let prixdelajoutbabyenk = prixdelajoutbaby / 1000;

if(prixdelajoutbaby < 1000){
    document.getElementById("prixdelajoutbaby").innerHTML = `${prixdelajoutbaby}`;
} else {
    document.getElementById("prixdelajoutbaby").innerHTML = `${prixdelajoutbabyenk.toFixed(2)} k`;
};

function babysitting(){
    if(resultat >= prixdelajoutbaby){
    setTimeout(babysittingactive, 0);
    nombredebabysitting ++;
    document.getElementById("nombredebabysitting").innerHTML = `Déjà acheté : ${nombredebabysitting}`;
    resultat -= prixdelajoutbaby;
    resultatenk -= prixdelajoutbaby / 1000;
    prixdelajoutbaby += Math.round(prixdelajoutbaby / 12);
    prixdelajoutbabyenk += Math.round(prixdelajoutbaby / 12) / 1000;
    if(prixdelajoutbaby < 1000){
        document.getElementById("prixdelajoutbaby").innerHTML = `${prixdelajoutbaby}`;
    } else {
        document.getElementById("prixdelajoutbaby").innerHTML = `${prixdelajoutbabyenk.toFixed(2)} k`;
    };    
    nombredollarparsecondeaffichable += 2;
    };
    opacityverification();
};

function babysittingactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(babysittingactive, calcul(2));
    opacityverification()
};

//vente gateaux
let nombredeventedegateaux = 0;
let prixventedegateaux = 700;
let prixventedegateauxenk = prixventedegateaux / 1000;

if(prixventedegateaux < 1000){
    document.getElementById("prixventedegateaux").innerHTML = `${prixventedegateaux}`;
} else {
    document.getElementById("prixventedegateaux").innerHTML = `${prixventedegateauxenk.toFixed(2)} k`;
};

function ventedegateaux(){
    if(resultat >= prixventedegateaux){
    setTimeout(ventegateauxactive, 0);
    nombredeventedegateaux ++;
    document.getElementById("nombredeventedegateaux").innerHTML = `Déjà acheté : ${nombredeventedegateaux}`;
    resultat -= prixventedegateaux
    resultatenk -= prixventedegateaux / 1000;
    prixventedegateaux += Math.round(prixventedegateaux / 12);
    prixventedegateauxenk += Math.round(prixventedegateaux / 12) / 1000;
    if(prixventedegateaux < 1000){
        document.getElementById("prixventedegateaux").innerHTML = `${prixventedegateaux}`;
    } else {
        document.getElementById("prixventedegateaux").innerHTML = `${prixventedegateauxenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 5;
    }
    opacityverification()
};

function ventegateauxactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(ventegateauxactive, calcul(5));
    opacityverification()
};

//vente de chaussures
let nombredeventredechaussures = 0;
let prixdelajoutventechaussures = 1500;
let prixdelajoutventechaussuresenk = prixdelajoutventechaussures / 1000;

if(prixdelajoutventechaussures < 1000){
    document.getElementById("prixdelajoutventechaussures").innerHTML = `${prixdelajoutventechaussures}`;
} else {
    document.getElementById("prixdelajoutventechaussures").innerHTML = `${prixdelajoutventechaussuresenk.toFixed(2)} k`;
};

function ventechaussures(){
    if(resultat >= prixdelajoutventechaussures){
    setTimeout(ventechaussureactive, 0);
    nombredeventredechaussures ++;
    document.getElementById("nombredeventredechaussures").innerHTML = `Déjà acheté : ${nombredeventredechaussures}`;
    resultat -= prixdelajoutventechaussures;
    resultatenk -= prixdelajoutventechaussures / 1000;
    prixdelajoutventechaussures += Math.round(prixdelajoutventechaussures / 12);
    prixdelajoutventechaussuresenk += Math.round(prixdelajoutventechaussures / 12) / 1000;
    if(prixdelajoutventechaussures < 1000){
        document.getElementById("prixdelajoutventechaussures").innerHTML = `${prixdelajoutventechaussures}`;
    } else {
        document.getElementById("prixdelajoutventechaussures").innerHTML = `${prixdelajoutventechaussuresenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 10;
    } 
    opacityverification()
}

function ventechaussureactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(ventechaussureactive, calcul(10));
    opacityverification()
};

//Vente de voiture
let nombreventedevoiture = 0;
let prixdelajoutventevoiture = 3500;
let prixdelajoutventevoitureenk = prixdelajoutventevoiture / 1000;

if(prixdelajoutventevoiture < 1000){
    document.getElementById("prixdelajoutventevoiture").innerHTML = `${prixdelajoutventevoiture}`;
} else {
    document.getElementById("prixdelajoutventevoiture").innerHTML = `${prixdelajoutventevoitureenk.toFixed(2)} k`;
};

function ventevoiture(){
    if(resultat >= prixdelajoutventevoiture){
    setTimeout(ventevoitureactive, 0);
    nombreventedevoiture ++;
    document.getElementById("nombreventedevoiture").innerHTML = `Déjà acheté : ${nombreventedevoiture}`;
    resultat -= prixdelajoutventevoiture;
    resultatenk -= prixdelajoutventevoiture / 1000;
    prixdelajoutventevoiture += Math.round(prixdelajoutventevoiture / 12);
    prixdelajoutventevoitureenk += Math.round(prixdelajoutventevoiture / 12) / 1000;
    if(prixdelajoutventevoiture < 1000){
        document.getElementById("prixdelajoutventevoiture").innerHTML = `${prixdelajoutventevoiture}`;
    } else {
        document.getElementById("prixdelajoutventevoiture").innerHTML = `${prixdelajoutventevoitureenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 25;
    } 
    opacityverification()
}

function ventevoitureactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(ventevoitureactive, calcul(25));
    opacityverification()
};

//vente maison
let nombredeventemaison = 0;
let prixdelajoutventedemaison = 6000;
let prixdelajoutventedemaisonenk = prixdelajoutventedemaison / 1000;

if(prixdelajoutventedemaison < 1000){
    document.getElementById("prixdelajoutventedemaison").innerHTML = `${prixdelajoutventedemaison}`;
} else {
    document.getElementById("prixdelajoutventedemaison").innerHTML = `${prixdelajoutventedemaisonenk.toFixed(2)} k`;
};

function ventemaison(){
    if(resultat >= prixdelajoutventedemaison){
    setTimeout(ventemaisonactive, 0);
    nombredeventemaison ++;
    document.getElementById("nombredeventemaison").innerHTML = `Déjà acheté : ${nombredeventemaison}`;
    resultat -= prixdelajoutventedemaison;
    resultatenk -= prixdelajoutventedemaison / 1000;
    prixdelajoutventedemaison += Math.round(prixdelajoutventedemaison / 15);
    prixdelajoutventedemaisonenk += Math.round(prixdelajoutventedemaison / 15) / 1000;
    if(prixdelajoutventedemaison < 1000){
        document.getElementById("prixdelajoutventedemaison").innerHTML = `${prixdelajoutventedemaison}`;
    } else {
        document.getElementById("prixdelajoutventedemaison").innerHTML = `${prixdelajoutventedemaisonenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 50;
    } 
    opacityverification()
}

function ventemaisonactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(ventemaisonactive, calcul(50));
    opacityverification()
};

//Usine de gateaux
let nombreusinedegateaux = 0;
let prixdelajoutusinedegateaux = 10000;
let prixdelajoutusinedegateauxenk = prixdelajoutusinedegateaux / 1000;

if(prixdelajoutusinedegateaux < 1000){
    document.getElementById("prixdelajoutusinedegateaux").innerHTML = `${prixdelajoutusinedegateaux}`;
} else {
    document.getElementById("prixdelajoutusinedegateaux").innerHTML = `${prixdelajoutusinedegateauxenk.toFixed(2)} k`;
};

function usinegateaux(){
    if(resultat >= prixdelajoutusinedegateaux){
    setTimeout(usinegateauxactive, 0);
    nombreusinedegateaux ++;
    document.getElementById("nombreusinedegateaux").innerHTML = `Déjà acheté : ${nombreusinedegateaux}`;
    resultat -= prixdelajoutusinedegateaux;
    resultatenk -= prixdelajoutusinedegateaux / 1000;
    prixdelajoutusinedegateaux += Math.round(prixdelajoutusinedegateaux / 15);
    prixdelajoutusinedegateauxenk += Math.round(prixdelajoutusinedegateaux / 15) / 1000;
    if(prixdelajoutusinedegateaux < 1000){
        document.getElementById("prixdelajoutusinedegateaux").innerHTML = `${prixdelajoutusinedegateaux}`;
    } else {
        document.getElementById("prixdelajoutusinedegateaux").innerHTML = `${prixdelajoutusinedegateauxenk.toFixed(2)} k`;
    };    
    nombredollarparsecondeaffichable += 100;
    }
    opacityverification()
}

function usinegateauxactive(){
    resultat ++;
    resultatenk += 0.001;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(usinegateauxactive, calcul(100));
    opacityverification()
};

//Usine chaussures
let nombreusinedechaussures = 0;
let prixdelajoutusinechaussures = 14000;
let prixdelajoutusinechaussuresenk = prixdelajoutusinechaussures / 1000;

if(prixdelajoutusinechaussures < 1000){
    document.getElementById("prixdelajoutusinechaussures").innerHTML = `${prixdelajoutusinechaussures}`;
} else {
    document.getElementById("prixdelajoutusinechaussures").innerHTML = `${prixdelajoutusinechaussuresenk.toFixed(2)} k`;
};

function usinechaussure(){
    if(resultat >= prixdelajoutusinechaussures){
    setTimeout(usinechaussureactive, 0);
    nombreusinedechaussures ++;
    document.getElementById("nombreusinedechaussures").innerHTML = `Déjà acheté : ${nombreusinedechaussures}`;
    resultat -= prixdelajoutusinechaussures;
    resultatenk -= prixdelajoutusinechaussures / 1000;
    prixdelajoutusinechaussures += Math.round(prixdelajoutusinechaussures / 15);
    prixdelajoutusinechaussuresenk += Math.round(prixdelajoutusinechaussures / 15) / 1000;
    if(prixdelajoutusinechaussures < 1000){
        document.getElementById("prixdelajoutusinechaussures").innerHTML = `${prixdelajoutusinechaussures}`;
    } else {
        document.getElementById("prixdelajoutusinechaussures").innerHTML = `${prixdelajoutusinechaussuresenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 200;
    } 
    opacityverification()
}

function usinechaussureactive(){
    resultat += 2;
    resultatenk += 0.002;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(usinechaussureactive, calcul(100));
    opacityverification()
};

//Usine voiture
let nombreusinevoiture = 0;
let prixdelajoutusinevoiture = 20000;
let prixdelajoutusinevoitureenk = prixdelajoutusinevoiture / 1000;

if(prixdelajoutusinevoiture < 1000){
    document.getElementById("prixdelajoutusinevoiture").innerHTML = `${prixdelajoutusinevoiture}`;
} else {
    document.getElementById("prixdelajoutusinevoiture").innerHTML = `${prixdelajoutusinevoitureenk.toFixed(2)} k`;
};

function usinevoiture(){
    if(resultat >= prixdelajoutusinevoiture){
    setTimeout(usinevoitureactive, 0);
    nombreusinevoiture ++;
    document.getElementById("nombreusinevoiture").innerHTML = `Déjà acheté : ${nombreusinevoiture}`;
    resultat -= prixdelajoutusinevoiture;
    resultatenk -= prixdelajoutusinevoiture / 1000;
    prixdelajoutusinevoiture += Math.round(prixdelajoutusinevoiture / 15);
    prixdelajoutusinevoitureenk += Math.round(prixdelajoutusinevoiture / 15) / 1000;
    if(prixdelajoutusinevoiture < 1000){
        document.getElementById("prixdelajoutusinevoiture").innerHTML = `${prixdelajoutusinevoiture}`;
    } else {
        document.getElementById("prixdelajoutusinevoiture").innerHTML = `${prixdelajoutusinevoitureenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 500;
    } 
    opacityverification()
}

function usinevoitureactive(){
    resultat += 5;
    resultatenk += 0.005;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(usinevoitureactive, calcul(100));
    opacityverification()
};

//Usine maison
let nombreusinedemaison = 0;
let prixdelajoutusinedemaison = 25000;
let prixdelajoutusinedemaisonenk = prixdelajoutusinedemaison / 1000;

if(prixdelajoutusinedemaison < 1000){
    document.getElementById("prixdelajoutusinedemaison").innerHTML = `${prixdelajoutusinedemaison}`;
} else {
    document.getElementById("prixdelajoutusinedemaison").innerHTML = `${prixdelajoutusinedemaisonenk.toFixed(2)} k`;
};

function usinemaison(){
    if(resultat >= prixdelajoutusinedemaison){
    setTimeout(usinemaisonactive, 0);
    nombreusinedemaison ++;
    document.getElementById("nombreusinedemaison").innerHTML = `Déjà acheté : ${nombreusinedemaison}`;
    resultat -= prixdelajoutusinedemaison;
    resultatenk -= prixdelajoutusinedemaison / 1000;
    prixdelajoutusinedemaison += Math.round(prixdelajoutusinedemaison / 15);
    prixdelajoutusinedemaisonenk += Math.round(prixdelajoutusinedemaison / 15) / 1000;
    if(prixdelajoutusinedemaison < 1000){
        document.getElementById("prixdelajoutusinedemaison").innerHTML = `${prixdelajoutusinedemaison}`;
    } else {
        document.getElementById("prixdelajoutusinedemaison").innerHTML = `${prixdelajoutusinedemaisonenk.toFixed(2)} k`;
    };
    nombredollarparsecondeaffichable += 1000;
    } 
    opacityverification()
}

function usinemaisonactive(){
    resultat += 10;
    resultatenk += 0.01;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(usinemaisonactive, calcul(100));
    opacityverification()
};

//infini
let nombredinfini = 0;
let prixdelajoutinfini = 1;

function infini(){
    if(resultat >= prixdelajoutinfini){
    setTimeout(infiniactive, 0);
    nombredinfini ++;
    console.clear();
    console.log(`Nombre de hack mondial = ${nombredinfini}`);
    resultat -= prixdelajoutinfini;
    resultatenk -= prixdelajoutinfini / 1000;
    } 
    opacityverification()
}

function infiniactive(){
    resultat += 10000;
    resultatenk += 10;
    if(resultat >= 1000){
        document.getElementById("afficher_resultat").innerHTML = `${resultatenk.toFixed(2)} k$`;
    } else {
        document.getElementById("afficher_resultat").innerHTML = `${resultat}$`;
    }
    setTimeout(infiniactive, calcul(100));
    opacityverification()
};

//bonus
let bonusboulean = true;

if(bonusboulean === true){
    bonusboulean = false;
    setTimeout(bonusactivate, 60000);
};

function bonusactivate(){
    document.getElementById("bonus").innerHTML = `Clic x 10`;
    setTimeout(enleverlemessage, 1000);
    dollarpour1clic = dollarpour1clic * 10;
    setTimeout(bonusdesactivate, 5000);
};

function bonusdesactivate(){
    dollarpour1clic = dollarpour1clic / 10;
    setTimeout(bonusactivate, 60000);
};

function enleverlemessage(){
    document.getElementById("bonus").innerHTML = ``;
};

//opacity
function opacityverification(){
    if(resultat < prixdedollarpar1clic){
        document.getElementById("premierbouton").style.opacity = "0.4";
    } else{
        document.getElementById("premierbouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutauto1){
        document.getElementById("secondbouton").style.opacity = "0.4";
    } else{
        document.getElementById("secondbouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutbaby){
        document.getElementById("3bouton").style.opacity = "0.4";
    } else{
        document.getElementById("3bouton").style.opacity = "1";
    };
    if(resultat < prixventedegateaux){
        document.getElementById("4bouton").style.opacity = "0.4";
    } else{
        document.getElementById("4bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutventechaussures){
        document.getElementById("5bouton").style.opacity = "0.4";
    } else{
        document.getElementById("5bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutventevoiture){
        document.getElementById("6bouton").style.opacity = "0.4";
    } else{
        document.getElementById("6bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutventedemaison){
        document.getElementById("7bouton").style.opacity = "0.4";
    } else{
        document.getElementById("7bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutusinedegateaux){
        document.getElementById("8bouton").style.opacity = "0.4";
    } else{
        document.getElementById("8bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutusinechaussures){
        document.getElementById("9bouton").style.opacity = "0.4";
    } else{
        document.getElementById("9bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutusinevoiture){
        document.getElementById("10bouton").style.opacity = "0.4";
    } else{
        document.getElementById("10bouton").style.opacity = "1";
    };
    if(resultat < prixdelajoutusinedemaison){
        document.getElementById("11bouton").style.opacity = "0.4";
    } else{
        document.getElementById("11bouton").style.opacity = "1";
    };
    document.getElementById("afficher_dollar_par_seconde").innerHTML = `${nombredollarparsecondeaffichable} $/s`;
};