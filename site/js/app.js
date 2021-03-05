window.onresize = function() { location.reload(); }

window.addEventListener("load", function() {
    var cont = document.getElementById("welcome");

    var cont3 = document.getElementById("welcometext");

    cont.classList.add('fadein');
    var timer3 = setInterval(movef, 50);
    var counter3 = 0;

    function movef() {
        counter3++;
        if (counter3 == 20) {
            clearInterval(timer3);
            timer3 = null;
            return;
        }
    }



    cont3.classList.add('moveright');
    var timer = setInterval(mover, 50);
    var counter = 0;


    function mover() {

        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    var cont2 = document.getElementById("login-container");
    cont2.classList.add('moveleft');
    var timer2 = setInterval(movel, 50);
    var counter2 = 0;

    function movel() {
        counter2++;
        if (counter2 == 20) {
            clearInterval(timer2);
            timer2 = null;
            return;
        }
    }

});