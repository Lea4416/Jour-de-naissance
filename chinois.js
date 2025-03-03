function chin(){
    let cj = document.getElementById("cj").value;
    let cm = document.getElementById("cm").value;
    let ca = document.getElementById("ca").value;
    let signe = ["Rat","Buffle","Tigre","Lapin","Dragon","Serpent","Cheval","Chevre","Singe","Coq","Chien","Cochon"];
    let element = ["Bois (木)","Bois (木)","Feu (火)","Feu (火)","Terre (土)","Terre (土)","Métal (金)","Métal (金)","Eau (水)","Eau (水)"];
    let daionisme = ["Yin","Yang"];
    let tronc = ["Yi (乙)","Jia (甲)","Bing (丙)","Ding (丁)","Wu (戊)","Ji (己)","Geng (庚)","Xin (辛)","Ren (壬)","Gui (癸)"]
    let sa;
    let ea;
    let ya;
    let j;
    let sj;
    let ej;
    let yc = 1924;


    sa = (ca-yc) % 12;
    ea = ca % 10;
    ya = ca % 2;
    j = (cm*30)+cj;
    j = j % 60;
    tj = j % 12;
    ej = j % 10;

    
    if (sa < 0){
        sa += 12;
    };
    
    if (ea < 0) {
      ea += 10;
    };

    if (sj < 0) {
      sj += 12;
    };

    if (ej < 0) {
      ej += 10;
    };
    
      

    console.log(cj);
    console.log(cm);
    console.log(ca);
    console.log(signe[sa]);
    console.log(element[ea]);
    console.log(daionisme[ya]);
    console.log(j);
    console.log(signe[sj]);
    console.log(element[ej]);
    console.log(tronc[ej])

    
      document.getElementById("année").innerHTML="Le signe de votre signe d'année chinois est "+signe[sa]+" "+element[ea]+" "+daionisme[ya]+".";
      document.getElementById("pillier").innerHTML="Vottre pillier chinois est "+signe[sj]+" "+element[ej]+". Votre tronc celeste est "+tronc[ej]+".<br><br>";
      document.getElementById("occ").innerHTML='<a href="Occidental.html"> Voulez-vous passez a la version occidental ?</a>';
     

}
