/* ========================================================================
target='_blank' on url that are not part of the current domain
see http://stackoverflow.com/questions/4425198/markdown-target-blank
* ======================================================================== */
(function() {
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {

       if (links[i].hostname != window.location.hostname) {

          if(!$(links[i]).parents('.noIcon').length) {
              links[i].target = '_blank';
              links[i].className += ' externalLink';
          };

       }

    }
})();

/* ========================================================================
 Google Analytics from html5BP: change your site's ID in config.yml
 Modified by djacquel to use jekyll config to set ID
* ======================================================================== */
if(googleAnalyticsCode != 'NOCODE'){
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create',googleAnalyticsCode,'auto');ga('send','pageview');
}


/* ========================================================================
 Testing Jekyll
* ======================================================================== */

function testingJekyll(){

  console.log('testingJekyll()');

  var tests       = $( ".test" );
  var testsNumber = tests.length;
  var passedTests = 0;
  var expected    = '';
  var result      = '';
  var resultClass = '';
  var resultText  = '';

  $('.testNumber').html( testsNumber );

  $.each( tests, function( id, elem ) {

    code     = $(elem).find('code').text();
    expected = $(elem).find('.expected').html();
    result   = $(elem).find('.result').html();

    if( expected != result ){
      resultClass = "panel-danger";
      resultText  = "FAILED";
      $(elem).find('.collapse').collapse('show');
    }else{
      resultClass = "panel-success";
      resultText  = "PASSED";
      passedTests++;
    }

    $(elem).removeClass('.panel-default').addClass( resultClass );
    $(elem).find('.panel-title a').append( resultText );

  });

  $('.passedTests').html( passedTests );
  $('.failedTests').html( testsNumber - passedTests );

}


(function() {
  if( $('#testingJekyll') ){
    testingJekyll();
  }
})();

/* ========================================================================
 Avoid `console` errors in browsers that lack a console.
 from html5bp http://html5boilerplate.com/
* ======================================================================== */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
