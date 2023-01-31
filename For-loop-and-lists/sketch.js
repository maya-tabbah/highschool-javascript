var snowman = ['pink','red', 'orange', 'yellow', 'green', 'blue', 'purple','indigo']
function setup() {
  createCanvas(400, 400);
}

function draw() {

  
  for(idx = 0; idx < snowman.length; idx++){
    fill(snowman[idx])
    ellipse(width/2, idx*50, idx*35, idx*45);
  
  }
}