var c = document.getElementById("duk");
var ctx = c.getContext("2d")
var xMouse = 0, yMouse = 0;
var key;
var moveupdown=0;
var moveside=0;
var xacc = 0;
var yacc = 0;
var bgSound = new Howl({
    urls: ['bgsound.mp3']
}).play();

var img1 = new Image();
img1.src = "lavakuben.png";
img1.width = 200 ;
img1.height = 200 ;

var img2 = new Image();
img2.src = "bluecircle.png";
img2.width = 20;
img2.height = 20;





function paintMan(x, y) {
    //måla huvud
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fill()


}

function mouseHandler(event) {
    xMouse=event.clientX;
    yMouse=event.clientY;
}



function block(x,y){
    ctx.beginPath();
    ctx.fillRect(x+10, y+10, 200, 200);
    ctx.fill();





}

function keyHandler(event){
    key=event.keyCode;
    if (key==87){
        moveupdown -= 20;
    } else if(key==83){
        moveupdown += 20;
    }
    else if (key==65){
        moveside -= 20;
    }
    else if (key==68){
        moveside += 20;
    }
}

//kallar på repaint 50 ggr i sekunden
function repaint() {
    ctx.clearRect(0, 0, 1000, 500);
    paintMan(xMouse,yMouse)
    block(moveside, moveupdown);
    
    ctx.drawImage(img2,xMouse-27,yMouse-30,50,50)
    ctx.drawImage(img1, moveside+10 , moveupdown+10, 200, 200);
    
    //Musspelare i taket och väggar
    if(xMouse < 10){     
        console.log("hejhej")
    }
    
    else if(yMouse < 10){
        console.log("hejhej")
    }
    
    else if(xMouse > 990){
        console.log("hejhej")
    }
    else if(yMouse > 490){
        console.log("hejhej")
    }
    
    //Om lavakuben är över iscirkeln
    
  //  if(xMouse ){
        
    // console.log("Hitb0x")   
  //  }
}

window.setInterval(repaint,20);  