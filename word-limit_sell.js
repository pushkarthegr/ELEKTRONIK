function products(){
    kya = document.getElementById("product").value;
    kya1 = kya.length;
    document.getElementById("product_bold").innerHTML = 30-kya1;
    lul = 30-kya1;
    if(kya1 == 30){
        kya2 = document.getElementById("product").value;
    }
    if(lul<0){
        reap = kya.substring(0, 29);
        document.getElementById("product").value = reap;
        document.getElementById("product_bold").innerHTML = "0";
    }
}
function paisa(){
    pya = document.getElementById("price").value;
    pya1 = pya.length;
    document.getElementById("price_bold").innerHTML = 10-pya1;
    lus = 10-pya1;
    if(pya1 == 10){
        pya2 =  document.getElementById("price").value;
    }
    if(lus<0){
        rea = pya.substring(0, 9);
        document.getElementById("price").value = rea;
        document.getElementById("price_bold").innerHTML = "0";
    }
}
function addres(){
    aya = document.getElementById("address").value;
    aya1 = aya.length;
    document.getElementById("address_bold").innerHTML = 100-aya1;
    lup = 100-aya1;
    if(aya1 == 100){
        aya2 =  document.getElementById("address").value;
    }
    if(lup<0){
        rep = aya.substring(0, 99);
        document.getElementById("address").value = rep;
        document.getElementById("address_bold").innerHTML = "0";
    }
}
function descript(){
    dya = document.getElementById("description").value;
    dya1 = dya.length;
    document.getElementById("description_bold").innerHTML = 300-dya1;
    lua = 300-dya1;
    if(dya1 == 300){
        dya2 = document.getElementById("description").value;
    }
    if(lua<0){
        res = dya.substring(0, 299);
        document.getElementById("description").value = res;
        document.getElementById("description_bold").innerHTML = "0";
    }
}