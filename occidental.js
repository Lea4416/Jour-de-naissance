function occ() {
    // alert("Test");

    let signeastrologique = ["Bélier","Taureaux","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire","Capricorne","Verseau","Poisson"];
    let mois = [" ","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

    let omin = document.getElementById("omin").value;
    let ohe = document.getElementById("ohe").value;
    let odj = document.getElementById("odj").value;
    let odm = document.getElementById("odm").value;
    let sa;
    let a;

    // Partie signe astrologique   
        // Bélier
        if((odm == 3)&&(odj >= 21) || (odm == 4)&&(odj <= 19)){
            sa=signeastrologique[0];
        }

        // Taureaux
        if((odm == 4)&&(odj >= 20) || (odm == 5)&&(odj <= 20)){
            sa=signeastrologique[1];
        }

        // Gémeaux
        if((odm == 5)&&(odj >= 21) || (odm == 6)&&(odj <= 20)){
            sa=signeastrologique[2];
        }

        // Cancer
        if((odm == 6)&&(odj >= 21) || (odm == 7)&&(odj <= 22)){
            sa=signeastrologique[3];
        }

        // Lion
        if((odm == 7)&&(odj >= 23) || (odm == 8)&&(odj <= 22)){
        sa=signeastrologique[4];
        }

        // Vierge
        if((odm == 8)&&(odj >= 23) || (odm == 9)&&(odj <= 22)){
            sa=signeastrologique[5];
        }

        // Balance
        if((odm == 9)&&(odj >= 23) || (odm == 10)&&(odj <= 22)){
            sa=signeastrologique[6];
        }

        // Scorpion
        if((odm == 10)&&(odj >= 23) || (odm == 11)&&(odj <= 21)){
            sa=signeastrologique[7];
        }

        // Sagittaire
        if((odm == 11)&&(odj >= 22) || (odm == 12)&&(odj <= 21)){
            sa=signeastrologique[8];
        }

        // Capricorne
        if((odm == 12)&&(odj >= 22) || (odm == 1)&&(odj <= 19)){
            sa=signeastrologique[9];
        
        }
        // Verseau
        if((odm == 1)&&(odj >= 20) || (odm == 2)&&(odj <= 18)){
            sa=signeastrologique[10];
        }

        // Poisson
        if((odm == 2)&&(odj >= 19) || (odm == 3)&&(odj <=11)){
            sa=signeastrologique[11];
        }

    // Partie Ascendant
        // Bélier
        if((ohe == 0)&&(omin >= 0) || (ohe == 1)&&(omin <= 59)){
            a=signeastrologique[0];
        }
        
        // Taureaux
        if((ohe ==2)&&(omin >= 0) || (ohe == 3)&&(omin <= 59)){
            a=signeastrologique[1];
        }
        
        // Gémeaux
        if((ohe == 4)&&(omin >= 0) || (ohe == 5)&&(omin <= 59)){
            a=signeastrologique[2];
        }
        
        // Cancer
        if((ohe == 6)&&(omin >= 0) || (ohe == 7)&&(omin <= 59)){
            a=signeastrologique[3];
        }
        
        // Lion
        if((ohe == 8)&&(omin >= 0) || (ohe == 9)&&(omin <= 59)){
            a=signeastrologique[4];
        }
        
        // Vierge
        if((ohe == 10)&&(omin >= 0) || (ohe == 11)&&(omin <= 59)){
            a=signeastrologique[5];
        }
        
        // Balance
        if((ohe == 12)&&(omin >= 0) || (ohe == 13)&&(omin <= 59)){
            a=signeastrologique[6];
        }
        
        // Scorpion
        if((ohe == 14)&&(omin >= 0) || (ohe == 15)&&(omin <= 59)){
            a=signeastrologique[7];
        }
        
        // Sagittaire
        if((ohe == 16)&&(omin >= 0) || (ohe == 17)&&(omin <= 59)){
            a=signeastrologique[8];
        }
        
        // Capricorne
        if((ohe == 18)&&(omin >= 0) || (ohe == 19)&&(omin <= 59)){
            a=signeastrologique[9];
        
        }
        // Verseau
        if((ohe == 20)&&(omin >= 0) || (ohe == 21)&&(omin <= 59)){
            a=signeastrologique[10];
        }
        
        // Poisson
        if((ohe == 22)&&(omin >= 1) || (ohe == 23)&&(omin <=59)){
            a=signeastrologique[11];
        }


    console.log(omin);
    console.log(ohe);
    console.log(odj);
    console.log(odm);
    console.log(sa);
    console.log(mois[odm]); 
    console.log(sa);
    console.log(a);

    document.getElementById("signe").innerHTML="La date de naissance est née le "+odj+" "+mois[odm]+" a "+ohe+"h"+omin+".";
    document.getElementById("ascendant").innerHTML="Votre signe astrologique est le "+sa+" et votre ascendant est "+a+" .<br><br>";
    document.getElementById("chinois").innerHTML='<a href="Chinoise.html"> Voulez-vous passez la version chinoise ?</a>';
}
