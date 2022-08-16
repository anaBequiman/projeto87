var canvas = new fabric.Canvas('myCanvas');
blockY = 1;
blockX = 1;
largura = 350;
altura = 430;
var imagemObjeto = "";
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        imagemObjeto = Img;
        imagemObjeto.scaleToWidth(largura);
        imagemObjeto.scaleToHeight(altura);
        imagemObjeto.set({
            top: blockY,
            left: blockX
        });
        canvas.add(imagemObjeto);
    });
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '86') {
        new_image('vermelho.jpg');
        console.log("V");
    }
    if (keyPressed == '71') {
        blockX = 250;
        new_image('verde.jpg');
        console.log("G");
    }
    if (keyPressed == '65') {
        blockX = 400;
        new_image('amarelo.jpg');
        console.log("A");
    }
    if (keyPressed == '82') {
        blockX = 650;
        new_image('rosa.jpg');
        console.log("R");
    }
    if (keyPressed == '90') {
        blockX = 710;
        new_image('azul.jpg');
        console.log("Z")
    }
}