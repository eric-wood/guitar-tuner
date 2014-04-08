window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var analyser = context.createAnalyser();
var source;
var freqData;
var samples = 2048;

var initStream = function(stream) {
  analyser.fftSize = samples;

  source = context.createMediaStreamSource(stream);
  source.connect(analyser);
  freqData = new Uint8Array(analyser.frequencyBinCount);
};

var initAudio = function() {
  if (!navigator.getUserMedia)
    navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  navigator.getUserMedia({audio:true}, initStream, function(e) {
    alert('Hey, you should click "allow" so I can listen to you!');
    console.log(e);
  });
};

var maxIndex = function(data) {
  var max = 0;
  var index = 0;
  for(var i=0; i < data.length; i++) {
    if(data[i] > max) {
      index = i;
      max = data[i];
    }
  }

  return index;
};

var getData = function() {
  analyser.getByteFrequencyData(freqData);
  console.log(freqData);
  
  var max = maxIndex(freqData);
  var step = context.sampleRate / samples;
  var freq = max * step;
  console.log(freq);
};

initAudio();

