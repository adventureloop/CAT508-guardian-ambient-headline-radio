![Screen Shot](http://cattopus23.com/img/panel-CAT508.png)

# CAT508 Conversion of the Guardian ambient radio station to Javascript

An attempt to make javascript play ambient music and speak headlines.

Only tested in Chrome & Firefox
Doesn't seem to work in Safari, not tested in IE

* Running here: http://revdancatt.github.com/CAT508-guardian-ambient-headline-radio/
* Information here: http://revdancatt.com/2012/04/25/guardian-ambient-headline-radio-the-definitive-blogpost/
* Image info here: http://revdancatt.com/2012/03/31/the-pxl-effect-with-javascript-and-canvas-and-maths/

The page polls the Guardian Content API for the latest headlines, if it sees
one it hasn't spotted before then it "announces" it and changes the background
image.

NOTES
-----

You can read notes about the background image stuff here:


# New Text

Updated version of rev dan catt's guardian ambient headline player. This
version removes the guardian as a source of headlines and instead subscribes to
an mqtt message bus. Less useful in just a browser, but much much more flexible.

##TODO
* Add mqtt client support
* images from entropy
* find a source of images
* fix the terrible voice
* make the input sounds more flexible
