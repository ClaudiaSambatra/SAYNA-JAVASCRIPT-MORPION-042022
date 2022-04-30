(function() {
    var joueur = {
        nom: "joueur",
        symbole : "X",
        score: 0 


    };

    var CPU = {
        nom : "CPU",
        symbole : "O",
        score : 0
    };

    var lesJoueurs = [joueur,CPU];
    var finDuJeu = false;
    var tours = Math.floor(Math.random() * 2);
    var tours_joueur = tours;
    var joueurActu = tours_joueur;
    //affichage dynaqmique
    choix1=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="o"
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    choix2=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="X";
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    choiseCase = function(id) {
        if(finDuJeu==false && lesJoueurs[joueurActu].nom == "joueur" && document.getElementById(id).classList.contains("coché")==false)
        {
            document.getElementById(id).textContent = joueur.symbole;
            document.getElementById(id).classList.add("coché");
            winner(joueur);
            joueurActu++;
             
        if(joueurActu % 2 == 0)
        {   
            joueurActu = 0;
        }
            var count=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("coché"))count++;
            }
            if(count==9){

            }else{
                machine();
            }
        }
         
         console.log(listOfgamers[joueurActu])
    }
      function onload(){console.log(lesJoueurs[joueurActu])
        if(lesJoueurs[joueurActu].nom=="CPU"){
            var count=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("coché"))count++;
            }
            if(count==9){

            }else{
                machine();
            }
        }
        }   
    machine = function() {
        if(finDuJeu==false && lesJoueurs[joueurActu].nom == "CPU" )
        {
            var machineChoix = Math.floor(Math.random() * 9);
            while(items[machineChoix].classList.contains("coché") ){
                machineChoix = Math.floor(Math.random() * 9);
            }    
            items[machineChoix].textContent = CPU.symbole;
            items[machineChoix].classList.add("coché");
            winner(CPU);
            joueurActu++;
            if(joueurActu % 2 == 0)
            {
                joueurActu = 0;
            }
    
        }

    }
    
function winner(player){
    var v1 = items[0].textContent==player.symbole && items[1].textContent==player.symbole && items[2].textContent==player.symbole
    var v2 = items[3].textContent==player.symbole && items[4].textContent==player.symbole && items[5].textContent==player.symbole
    var v3 = items[6].textContent==player.symbole && items[7].textContent==player.symbole && items[8].textContent==player.symbole
    var v4 = items[0].textContent==player.symbole && items[3].textContent==player.symbole && items[6].textContent==player.symbole
    var v5 = items[1].textContent==player.symbole && items[4].textContent==player.symbole && items[7].textContent==player.symbole
    var v6 = items[2].textContent==player.symbole && items[5].textContent==player.symbole && items[8].textContent==player.symbole
    var v7 = items[0].textContent==player.symbole && items[4].textContent==player.symbole && items[8].textContent==player.symbole
    var v8 = items[2].textContent==player.symbole && items[4].textContent==player.symbole && items[6].textContent==player.symbole
        if (v1){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[0].style.color="green"
            items[1].style.color="green"
            items[2].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (v2){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[3].style.color="green"
            items[4].style.color="green"
            items[5].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (v3){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[6].style.color="green"
            items[7].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (v4){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[0].style.color="green"
            items[3].style.color="green"
            items[6].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }   
        else if (v5){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[1].style.color="green"
            items[4].style.color="green"
            items[7].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (v6){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[2].style.color="green"
            items[5].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (v7){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[0].style.color="green"
            items[4].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (v8){
            console.log(player.nom+" a gagnée");  
            finDuJeu=true;
            player.score++;
            items[2].style.color="green"
            items[4].style.color="green"
            items[6].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        
}
    // Vide le contenu de toute les cases
    rest = function() {
        finDuJeu = false;
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
            items[i].classList.remove("coché");
            items[i].style.color = 'black'
        }
        CPU.score = 0;
        joueur.score = 0;

        tours_joueur++;
        alert(lesJoueurs[joueurActu].nom)
        machine();
        document.querySelector(".you-score").textContent= 0;
        document.querySelector(".cpu-score").textContent = 0;            
    }
})();
