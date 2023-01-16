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



    //alert("L'item est deja ajouter");
}

