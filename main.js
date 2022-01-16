function preload() {
classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
canvas = createCanvas(280, 280);
canvas.position(500, 250);
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function draw() {
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
line(pmouseX, pmouseY, mouseX, mouseY);
}
}

function classifyCanvas(){
classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
if(error){
console.error(error);
}
console.log(results);
document.getElementById('Sketch').innerHTML = 'sketch: ' + results[0].label;
document.getElementById('Confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence*100) + '%';
utterthis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterthis);
}

function clearCanvas() {
background("white");

}