let socket;

function setup(){
	createCanvas(windowWidth, windowHeight);  
    frameRate(30);
    noStroke();
    fill(0, 0, 255, 10);
    background ('lightgrey');

    socket = io('/').connect();

    socket.on('draw', data => {
        console.log(data);
        const x = data.x * windowWidth,
              y = data.y * windowHeight;
        rect(x  - 50, y - 50, 100, 100);
    });
}

function draw() { 
    if(mouseIsPressed){
        rect(mouseX - 50, mouseY - 50, 100, 100);
        const obj = {
            x: mouseX / windowWidth,
            y: mouseY / windowHeight
        }
        socket.emit('draw', obj);
    }
}