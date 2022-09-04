var sayac=1;
var sepet=0;

function art(){
    sayac++;
}

function azal(){
    if(sayac>1){
        sayac--;
    }
}

function saydir(){
    var sayacim = document.getElementById("sayacim");
    sayacim.innerHTML = sayac;
}
saydir();

function sepetsayi(){
    var sepsayi = document.getElementById("sepsay");
    sepsayi.innerHTML = sayac;
    sepsayi.classList.add("vis");
}

var im1 = document.getElementById("img1");
var im2 = document.getElementById("img2");
var im3 = document.getElementById("img3");
var im4 = document.getElementById("img4");
var sim1 = document.getElementById("sim1");
var sim2 = document.getElementById("sim2");
var sim3 = document.getElementById("sim3");
var sim4 = document.getElementById("sim4");
sim1.classList.add("sims");
im1.classList.add("visib");
function im1v() {
    im1.classList.add("visib");
    im2.classList.remove("visib");
    im3.classList.remove("visib");
    im4.classList.remove("visib");
    sim1.classList.add("sims");
    sim2.classList.remove("sims");
    sim3.classList.remove("sims");
    sim4.classList.remove("sims");
}
function im2v() {
    im1.classList.remove("visib");
    im2.classList.add("visib");
    im3.classList.remove("visib");
    im4.classList.remove("visib");
    sim2.classList.add("sims");
    sim3.classList.remove("sims");
    sim4.classList.remove("sims");
    sim1.classList.remove("sims");
}
function im3v() {
    im1.classList.remove("visib");
    im2.classList.remove("visib");
    im3.classList.add("visib");
    im4.classList.remove("visib");
    sim3.classList.add("sims");
    sim4.classList.remove("sims");
    sim2.classList.remove("sims");
    sim1.classList.remove("sims");
}
function im4v() {
    im1.classList.remove("visib");
    im2.classList.remove("visib");
    im3.classList.remove("visib");
    im4.classList.add("visib");
    sim4.classList.add("sims");
    sim3.classList.remove("sims");
    sim2.classList.remove("sims");
    sim1.classList.remove("sims");
}

var subMenu = document.getElementById("subMenu");
  function toggleMenu() {
  subMenu.classList.toggle("open-menu");
  subMenu2.classList.remove("open-menu2");

}

var subMenu2 = document.getElementById("subMenu2");
  function toggleMenu2() {
  subMenu2.classList.toggle("open-menu2");
  subMenu.classList.remove("open-menu");
}

function deneme(){
    subMenu.classList.remove("open-menu");
    subMenu2.classList.remove("open-menu2");
}

function sepetekle(){
    sepet = sayac;
}

function eklesepet(){
    var fiyat = sayac*125;
    var sepetic = document.getElementById("cartsepet");
    sepetic.innerHTML = '<div class="flx"><img id="sepimg" src="images/image-product-1-thumbnail.jpg"><div class="flxcs"><p>Fall Limited Edition Sneakers</p>  <p>$125 x '+sayac+' <span>$'+fiyat+'</span></p> </div><img onclick="silsepet()" id="cop" src="images/icon-delete.svg"></div>';
}

function silsepet(){
    var sepetic2 = document.getElementById("cartsepet");
    sepetic2.innerHTML = '<p>Your cart is empty</p>';
    var sepsayi = document.getElementById("sepsay");
    sepsayi.classList.remove("vis");
    sayac = 1;
    saydir();
}

function menuac(){
    var menuYan = document.getElementById("yanMenu");
    var badi = document.getElementById("abc");
    menuYan.classList.toggle("ac");
    badi.classList.toggle("op");
}

var gecsay = 0;

function saggecis(){
    if(gecsay==3){
        gecsay=0;
    }
    else{
        gecsay ++;
    }
    resimgec();
}

function solgecis(){
    if(gecsay==-3){
        gecsay=0;
    }
    else{
        gecsay --;
    }
    resimgec();
}

function resimgec(){
    if(gecsay==0){
        im1v();
    }
    else if(gecsay==1 || gecsay==-3){
        im2v();
    }
    else if(gecsay==2 || gecsay==-2){
        im3v();         
    }
    else if(gecsay==3 || gecsay==-1){
        im4v();      
    }
}