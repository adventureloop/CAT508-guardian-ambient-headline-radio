radio = {
    
    isSpeaking: false,
    currentVolume: 100,
    targetVolume: 40,
    saying: null,

    init: function() {
        //utils.log('ready');
    },

    fadeSound: function(soundId, targetVolume, step) {

        //  decrease the current volume
        if (targetVolume < radio.currentVolume) {
            radio.currentVolume--;
        } else {
            radio.currentVolume++;
        }
        
        $('#background1').get(0).volume=(radio.currentVolume/100);

        //  if we have reached the targetVolume then we are done
        if (radio.currentVolume == targetVolume) {
            radio.fadeFinished();
            return;
        }

        //  otherwise we're going to want to call this function again
        //  but we have to work out when, if we wanted to drop from 100
        //  to 40 (i.e. 60 units) in 2000ms, then we shoudl call this
        //  again in 2000/60 ms
        setTimeout(function() {radio.fadeSound(soundId, targetVolume, step);}, step);

    },

    say: function(msg, params) {
        this.saying = msg;
        this.sayingParams = params;
        radio.fadeSound('leftbank', 20, 2000/Math.abs(radio.currentVolume - 20));
    },

    fadeFinished: function() {
        //utils.log('finished fade');
        //  If we are supposed to be saying something, do it now
        if (this.saying !== null) {
            try {
                speak(this.saying, this.params);
            } catch(er) {
                radio.speakEnded();
            }
        } else {
            control.finishBroadcast();
        }
    },

    speakEnded: function() {

        this.saying = null;
        radio.fadeSound('leftbank', 100, 2000/Math.abs(radio.currentVolume - 100));

    }

};