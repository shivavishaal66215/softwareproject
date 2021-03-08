window.addEventListener('load', function() {
    var e = document.getElementById('verticalline');
    e.classList.add('moveup');
    var counter = 0;
    var timer = setInterval(it, 50);

    e = document.getElementById('upperline');
    e.classList.add('moveleft');
    counter = 0;
    timer = setInterval(it, 50);

    e = document.getElementById('bottomline');
    e.classList.add('moveright');
    counter = 0;
    timer = setInterval(it, 50);

    e = document.getElementById('welcometext');
    e.classList.add('fadeup');
    counter = 0;
    timer = setInterval(it, 50);


    e = document.getElementById('actualimage');
    e.classList.add('fadein')
    counter = 0;
    timer = setInterval(it, 50);

    e = document.getElementById('box1');
    e.classList.add('fadein')
    counter = 0;
    timer = setInterval(it, 50);

    e = document.getElementById('box2');
    e.classList.add('fadein')
    counter = 0;
    timer = setInterval(it, 50);


    function it() {
        counter++;
        if (counter == 20) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }


});