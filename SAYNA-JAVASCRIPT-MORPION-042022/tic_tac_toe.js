(function() {
    var end_game = false;
    var first_turn= Math.floor(Math.random() * 2);
    var participant_turn = first_turn;
    var joueurActuel = participant_turn;

    var joueur = {
        nom: "joueur",
        symbole : "X",
        score: 0 


    };

    var CPU = {
        nom : "CPU",
        symbole : "0",
        score : 0
    };

    var participants = [joueur,CPU];
   
    //affichage des symboles par choix
    choose1=function(choix){
        joueur.symbole=choix.textContent;
        CPU.symbole="O"
        choix.parentNode.parentNode.style.display="none";
        final_case();
    }
    choose2=function(choix){
        joueur.symbole=choix.textContent;
        CPU.symbole="X";
        choix.parentNode.parentNode.style.display="none";
        final_case();
    }
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    choiseCase = function(id) {
        if( participants[joueurActuel].nom == "joueur" && document.getElementById(id).classList.contains("active")==false && end_game==false)
        {
            document.getElementById(id).textContent = joueur.symbole;
            document.getElementById(id).classList.add("active");
            vainqueur(joueur);
            joueurActuel++;
            joueurActuel = joueurActuel % 2;
            var case_coche=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("active"))case_coche++;
            }
            if(case_coche==9){

            }else{
                CPU_bot();
            }
        }
         
        
    }
      function final_case(){
        if(participants[joueurActuel].nom=="CPU"){
            var case_coche=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("active"))case_coche++;
            }
            if(case_coche==9){

            }else{
                CPU_bot();
            }
        }
        }   
    CPU_bot = function() {
        if(end_game ==false && participants[joueurActuel].nom == "CPU" )
        {
            var CPU_casechoose = Math.floor(Math.random() * 9);
            while(items[CPU_casechoose].classList.contains("active") ){
                CPU_casechoose = Math.floor(Math.random() * 9);
            }    
            items[CPU_casechoose].textContent = CPU.symbole;
            items[CPU_casechoose].classList.add("active");
            vainqueur(CPU);
            joueurActuel++;
            joueurActuel = joueurActuel % 2;
    
        }

    }
    
function vainqueur(player){
    //condition pour les lignes
    var vainq1 = items[0].textContent==player.symbole && items[1].textContent==player.symbole && items[2].textContent==player.symbole
    var vainq2 = items[3].textContent==player.symbole && items[4].textContent==player.symbole && items[5].textContent==player.symbole
    var vainq3 = items[6].textContent==player.symbole && items[7].textContent==player.symbole && items[8].textContent==player.symbole
    //condition pour les colonnes
    var vainq4 = items[0].textContent==player.symbole && items[3].textContent==player.symbole && items[6].textContent==player.symbole
    var vainq5 = items[1].textContent==player.symbole && items[4].textContent==player.symbole && items[7].textContent==player.symbole
    var vainq6 = items[2].textContent==player.symbole && items[5].textContent==player.symbole && items[8].textContent==player.symbole
    //condition pour les diagonales
    var vainq7 = items[0].textContent==player.symbole && items[4].textContent==player.symbole && items[8].textContent==player.symbole
    var vainq8 = items[2].textContent==player.symbole && items[4].textContent==player.symbole && items[6].textContent==player.symbole
        if (vainq1){
             
            end_game=true;
            player.score++;
            items[0].style.backgroundColor="rgb(5, 141, 252)"
            items[1].style.backgroundColor="rgb(5, 141, 252)"
            items[2].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (vainq2){
              
            end_game=true;
            player.score++;
            items[3].style.backgroundColor="rgb(5, 141, 252)"
            items[4].style.backgroundColor="rgb(5, 141, 252)"
            items[5].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (vainq3){
            
            end_game=true;
            player.score++;
            items[6].style.backgroundColor="rgb(5, 141, 252)"
            items[7].style.backgroundColor="rgb(5, 141, 252)"
            items[8].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (vainq4){
            
            end_game=true;
            player.score++;
            items[0].style.backgroundColor="rgb(5, 141, 252)"
            items[3].style.backgroundColor="rgb(5, 141, 252)"
            items[6].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }   
        else if (vainq5){
         
            end_game=true;
            player.score++;
            items[1].style.backgroundColor="rgb(5, 141, 252)"
            items[4].style.backgroundColor="rgb(5, 141, 252)"
            items[7].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (vainq6){
           
            end_game=true;
            player.score++;
            items[2].style.backgroundColor="rgb(5, 141, 252)"
            items[5].style.backgroundColor="rgb(5, 141, 252)"
            items[8].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (vainq7){
             
            end_game=true;
            player.score++;
            items[0].style.backgroundColor="rgb(5, 141, 252)"
            items[4].style.backgroundColor="rgb(5, 141, 252)"
            items[8].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (vainq8){
             
            end_game=true;
            player.score++;
            items[2].style.backgroundColor="rgb(5, 141, 252)"
            items[4].style.backgroundColor="rgb(5, 141, 252)"
            items[6].style.backgroundColor="rgb(5, 141, 252)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        
}
    // Vide le contenu de toute les cases
    rest = function() {
        end_game= false;
        for (var i = 0; i < items.length; i++) {
            items[i].textContent = ''
            items[i].classList.remove("active");
            items[i].style.backgroundColor = '#fff'
        }
        CPU.score = 0;
        joueur.score = 0;

        participant_turn++;
        CPU_bot();
        document.querySelector(".you-score").textContent= 0;
        document.querySelector(".cpu-score").textContent = 0;            
    }
})();
