/*!
     * Kronometre.js by kazimanilaydin
     * https://github.com/kazimanilaydin/kronometre.js
     *
     * Copyright 2017, Kazım Anıl AYDIN
     * 
     */

    var kronometre = (function(deneme){

        var yazdir = function(dakika,saniye){
            
            _saniye = 0;
            _dakika = 0;

            if(dakika < 10){_dakika = "0" + dakika;}else{_dakika = dakika;}     
            if(saniye < 10){_saniye = "0" + saniye;}else{_saniye = saniye;}
            
            document.getElementById("_kronometre").innerHTML = _dakika + ":" + _saniye;

        };

        var baslat = function(dakika = undefined,saniye = undefined){

            if(saniye == undefined){saniye = 0};
            if(dakika == undefined){dakika = 0};

            window._kronometre = window.setInterval(function(){

                if(saniye > 59){saniye = 0; dakika++;}
                saniye++;

                //console.log(dakika,saniye);
                window.__kronometre = {dakika: dakika, saniye: saniye};
                yazdir(dakika,saniye);

            },1000);

        };

        var durdur = function(){
            window.clearTimeout(window._kronometre);
        };

        var temizle = function(){
            yazdir(0,0);
        };

        var devam = function(){

            var __dakika = window.__kronometre.dakika;
            var __saniye = window.__kronometre.saniye;

            baslat(__dakika, __saniye);
        };

        return {
            baslat: baslat,
            durdur: durdur,
            temizle: temizle,
            yazdir: yazdir,
            devam: devam
        };

    })();
	
	/* <span id="_kronometre"></span> */

    // kronometre.durdur();
    // kronometre.devam();
    // kronometre.temizle();
    // kronometre.yazdir();
    // kronometre.baslat();
