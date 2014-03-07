bookmark-jsloader
=================

A very simple bookmarklet that will quickly load any library onto the current page for you.

Instructions
============

To add this bookmark, create a new blank bookmark in your browser and name it loadjs or something you'll remember. Grab the bookmark-jsloader.txt file contents and paste it into URL portion of the edit bookmark dialog.

Click the bookmark and input the url js library you want to load into the dialog box. 

bookmark-jsloader also comes with shortcuts to a few common libraries that can be accessed just by inputting any of these library names:
* backbone
* gsap
* jquery
* jqueryui
* lodash
* numeric
* underscore

If you're interested in which versions of the libraries these shortcuts load, look at the knownLibraries object inside bookmark-jsloader.js.

Similarly if you'd like to add add more shortcuts, just edit the knownLibraries object, reminify, and make your own bookmark of the form: 'javascript:(function(){.....}())'

Limitations
===========

Libraries are not loaded in noConflict mode, and thus may overwrite existing libraries on the page.

Some sites (facebook, github) have implemented CSP which in should not affect the function of bookmarklets but in actuality, does. On these sites, you will find the bookmarklet will not load scripts.

More information here: <a href="https://github.com/blog/1477-content-security-policy">CSP Information</a>

TLDR: "As made clear by the CSP spec, browser bookmarklets shouldn't be affected by CSP. But, none of the browsers get this correct. All cause CSP violations and prevent the bookmarklet from functioning."
