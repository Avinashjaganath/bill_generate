function back(){
    tea=document.getElementById("tea").value*10;
    coffee=document.getElementById("coffee").value*10;
    hor=document.getElementById("hor").value*20;
    ltea=document.getElementById("ltea").value*15;

    s_m=document.getElementById("s_meal").value*70;
    half=document.getElementById("0.5me").value*50;
    rice=document.getElementById("rice").value*45;
    roti=document.getElementById("roti").value*50;

    c_bri=document.getElementById("c_bri").value*120;
    gray=document.getElementById("r_c_g").value*70;
    m_bri=document.getElementById("m_bri").value*170;
    kabab=document.getElementById("kabab").value*50;

    fin=tea+coffee+hor+ltea+s_m+half+rice+roti+c_bri+m_bri+kabab+gray;  
    document.getElementById("total").innerHTML=parseInt(fin);
}