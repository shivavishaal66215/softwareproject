window.addEventListener('load', function() {
    var vert = document.getElementById('verticalline');
    vert.classList.add('moveup');
    var counter = 0;
    var timer = setInterval(moveup, 50);

    function moveup() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('horizontalinetop');
    vert.classList.add('moverighttop');
    counter = 0;
    timer = setInterval(moverighttop, 50);

    function moverighttop() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('horizontalinebottom');
    vert.classList.add('moverightbottom');
    counter = 0;
    timer = setInterval(moverightbottom, 50);

    function moverightbottom() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('invigilation');
    vert.classList.add('flourishleft');
    counter = 0;
    timer = setInterval(flourishleft, 50);

    function flourishleft() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('Management');
    vert.classList.add('flourishleft');
    counter = 0;
    timer = setInterval(flourishleft, 50);

    function flourishleft() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }


    vert = document.getElementById('System');
    vert.classList.add('flourishleft');
    counter = 0;
    timer = setInterval(flourishleft, 50);

    function flourishleft() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('actualimage');
    vert.classList.add('fadein');
    counter = 0;
    timer = setInterval(fadein, 50);

    function fadein() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('sidebar');
    vert.classList.add('fadein2');
    counter = 0;
    timer = setInterval(fadein2, 50);

    function fadein2() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }


    vert = document.getElementById('main-tiles');
    vert.classList.add('fadeup');
    counter = 0;
    timer = setInterval(fadeup, 50);

    function fadeup() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    vert = document.getElementById('logoimg');
    vert.classList.add('fadein3');
    counter = 0;
    timer = setInterval(fadein3, 50);

    function fadein3() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }
});