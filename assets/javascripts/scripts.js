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

function nl2space( textToStrip ){

  var separator   = "§§§";
  var lines       = [];
  var linesLength = 0

  textToStrip = textToStrip.replace( /(\r\n|\n|\r)/gm, separator );
  textToStrip = textToStrip.replace( /\>[\n\t\r ]+\</g, "><");
  textToStrip = trim( textToStrip, separator );
  lines       = textToStrip.split( separator )

  linesLength = lines.length;

  for( var i=0; i < linesLength; i++ ){
    lines[i] = lines[i].trim();
  }

  textToStrip = lines.join(' ');

  return textToStrip;
}

var trim = (function () {
    "use strict";

    function escapeRegex(string) {
        return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
    }

    return function trim(str, characters, flags) {
        flags = flags || "g";
        if (typeof str !== "string" || typeof characters !== "string" || typeof flags !== "string") {
            throw new TypeError("argument must be string");
        }

        if (!/^[gi]*$/.test(flags)) {
            throw new TypeError("Invalid flags supplied '" + flags.match(new RegExp("[^gi]*")) + "'");
        }

        characters = escapeRegex(characters);

        return str.replace(new RegExp("^[" + characters + "]+|[" + characters + "]+$", flags), '');
    };
}());

function testingJekyll(){

  var tests         = $( ".test" );
  var testsNumber   = tests.length;
  var passedTests   = 0;
  var expected      = '';
  var result        = '';
  var testid        = '';
  var nl2spaceflag  = '';
  var resultClass   = '';
  var resultText    = '';
  var testFailing   = false;

  $('.testNumber').html( testsNumber );

  $.each( tests, function( id, elem ) {

    testid   = $(elem).data('testid');
    expected = $(elem).find('.expected').html();
    result   = $(elem).find('.result').html();
    nl2spaceflag = $(elem).find('.nl2space').html();

    if( nl2spaceflag == 'true' ){
      expected = nl2space( expected );
      result   = nl2space( result );
    }

    console.log('expected=' + expected);
    console.log('result  =' + result);

    if( expected != result ){
      resultClass = "danger";
      resultText  = "FAILED";
      testFailing = true;
      $(elem).find('.collapse').collapse('show');
    }else{
      resultClass = "success";
      resultText  = "PASSED";
      testFailing = false;
      passedTests++;
    }

    $(elem).removeClass('.panel-default').addClass( "panel-" + resultClass );
    $(elem).find('.panel-title a.testTitle').append( resultText );
    $("#testLight-" + testid).addClass( resultClass );
    if( testFailing === true ){
      $("#testLight-" + testid).siblings( "a" ).addClass( resultClass );
    }
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
