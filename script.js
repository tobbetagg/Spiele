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
var life = 1
var radie = 2 
var img1 = new Image();
var ifpower = 0
img1.src = "lavakuben.png";
img1.width = 200 ;
img1.height = 200 ;

/*var img2 = new Image();
img2.src = "bluecircle.png";
img2.width = 20;
img2.height = 20;*/


function speed(x,y){
    ctx.beginPath
    ctx.fillRect(x,y,25,25)
    ctx.fill()
    
}


function paintMan(x, y) {
    //måla huvud
    ctx.beginPath();
    ctx.fillRect(xMouse, yMouse, 50, 50)
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
    
 /*   ctx.drawImage(img2,xMouse-27,yMouse-30,50,50)*/
    ctx.drawImage(img1, moveside+10 , moveupdown+10, 200, 200);
    
    //Musspelare i taket och väggar
  /*  if(xMouse < 10){     
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
    */
    //Om lavakuben är över iscirkeln
    
    if(xMouse + 50 == moveside||xMouse + 50 == moveside + 200|| yMouse == moveupdown||yMouse == moveupdown + 200){
        
     console.log("Hitb0x")   
    }
    
   
}

window.setInterval(repaint,20);
window.setInterval(power, 20)


function power(){
     for ( i = 0; i < 25; i++ ) {
   var ifpower = Math.floor((Math.random() * 100) + 1);
     if( ifpower > 99){
         speed(Math.floor((Math.random() * 1000) + 1),Math.floor((Math.random() * 1000) + 1))
         
     }
    }
    
}