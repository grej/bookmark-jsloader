(function () {
    var knownLibraries = {},
        input,
        inject = true,
        script;
    
    knownLibraries = {
        'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js',
        'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js',
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js',
        'jqueryui': '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js',
        'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js',
        'gsap': '//cdnjs.cloudflare.com/ajax/libs/gsap/1.11.5/TweenMax.min.js',
        'numeric': 'http://numericjs.com/lib/numeric-1.2.6.min.js'
    };
  
    while (!input) {
        input = prompt('Input a valid js url or shortcut');
        if (!/^(ftp:\/\/|http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(input)) {
            if (knownLibraries[input.toLowerCase()]) {
                input = knownLibraries[input.toLowerCase()];
            } else if (input === null) {
                inject = false;
            }
        }
        if (inject) {
            script = document.createElement('SCRIPT');
            script.src = input;
            document.body.appendChild(script);
        }
    }
}());