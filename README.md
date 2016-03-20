![Screen Shot](http://cattopus23.com/img/panel-CAT508.png)


# MQTT CAT508

Updated version of [revdancatt][4]'s [guardian ambient headline player][2]. This
version removes the guardian as a source of headlines and instead subscribes to
an mqtt message bus. Less useful in just a browser, but much much more flexible.

##TODO
* ~~Add mqtt client support~~
* images from entropy
* find a source of images
* fix the terrible voice
* make the input sounds more flexible

## Set up

You need mosquitto with websockets support, versions great than 1.4 have this
built in. You need to enable a websockets broker and an mqtt one for this to be
useful.

    $ mosquitto -c mosquitto.conf

Open index.html in a web browser

	$ mosquitto_pub -t "/CAT508 " -m "Hello, I am an interesting Headline"


# CAT508 Conversion of the Guardian ambient radio station to Javascript

An attempt to make javascript play ambient music and speak headlines.

Only tested in Chrome & Firefox
Doesn't seem to work in Safari, not tested in IE

* [Old Running version][1]
* [Information here][2]
* [Image info][3]

[1]: http://revdancatt.github.com/CAT508-guardian-ambient-headline-radio/
[2]: http://revdancatt.com/2012/04/25/guardian-ambient-headline-radio-the-definitive-blogpost/
[3]: http://revdancatt.com/2012/03/31/the-pxl-effect-with-javascript-and-canvas-and-maths/
[4]: http://revdancatt.com/
