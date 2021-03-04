Barba.Pjax.start();


var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        /**
         * This function is automatically called as soon the Transition starts
         * this.newContainerLoading is a Promise for the loading of the new container
         * (Barba.js also comes with an handy Promise polyfill!)
         */
        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },
    fadeOut: function() {},
    fadeIn: function() {
        this.newContainer.classList.add("slide-in");
    }
});

Barba.Pjax.getTransition = function() {

    return FadeTransition;
};