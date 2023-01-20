
         //= calculer
         function egale() 
         { 
             let a = document.getElementById("output").value 
             let b = eval(a) 
             document.getElementById("output").value = b 
         } 
         //= met la valeur
         function afficher(val) 
         { 
             document.getElementById("output").value+=val 
         } 
         //=enleve de l'ecran
         function supp() 
         { 
             document.getElementById("output").value = "" 
         } 
    