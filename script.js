compteur=4;
function ajouter(){
   let item=document.getElementById("desc").value;
   let lePrixItem=document.getElementById("valeur").value;
   let nouveauP=document.createElement("li");
   let nouveauSpan=document.createElement("span");
   nouveauP.innerText=item + " : "; //ecrire dans le paragraphe

   nouveauSpan.innerText=lePrixItem + "$";
document.getElementById("listeItems").append(nouveauP);
//document.getElementById("listeItems").append(nouveauSpan);
nouveauP.append(nouveauSpan);

// mettre a jour le total
   let ancienPrix= document.getElementById("monTotal").innerText;
   let nouveauPrix = +ancienPrix + +lePrixItem;

   document.getElementById("monTotal").innerText=nouveauPrix;

   //creer des nouveaux items hide dans le formulaire pour envoyer par courriel

   nouveauInput=document.createElement("input");
   nouveauInput.setAttribute("hidden",true);
   nouveauInput.setAttribute("name","item"+compteur);
   nouveauInput.setAttribute("value", item);
   document.forms[0].append(nouveauInput);
   compteur++;




    //alert("L'item est deja ajouter");
}

function ajouterEmail(){
   let email=document.getElementById("email").value;
   document.forms[0].action="mailto:"+email;
}

function effacer(){
   document.forms[0].action="";
}

