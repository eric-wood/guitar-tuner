guitar-tuner
============

HTML5 guitar tuner of sorts using the cool new audio APIs.

### How it work?

The idea is to use an FFT to analyze input from the computer's audio input device and compare it against known frequencies for different guitar strings.

This may never work very well, the maximum FFT size Chrome allows is 2048, which is half of what we'd like to get within a resolution of 10 Hz...

But it's still kinda cool!

### You should help me hack on this

It's been ages since I've taken a class in signal processing, and I'm pretty new to audio programming in general.

If you see this and think it's neat you should come hack on it with me! It'll be fun!
