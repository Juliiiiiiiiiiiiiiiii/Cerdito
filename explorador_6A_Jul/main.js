canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del cerdito.
cerdito_ancho=100;
cerdito_alto=100;

background_image = "pasto.png";

cerdito_image = "cerdito.webp";

cerdito_x = 10;
cerdito_y = 10;

//Crea la función "add()"
 
background_imgTag=new Image();	              //Define la variable con una nueva imagen de fondo 
background_imgTag.onload=uploadBackground;    // Define una función para cargar esta variable
background_imgTag.src=background_image;	      // Carga la imagen de fondo 

cerdito_imgTag=new Image();                   //Define la variable con una nueva imagen
cerdito_imgTag.onload=uploadCerdito;	      // Define una función para cargar esta variable
cerdito_imgTag.src=cerdito_image;	          // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){                          
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);     //Dibuja la imagen de fondo
}
//Crea una función "uploadrover()".
function uploadCerdito(){
    ctx.drawImage(cerdito_imgTag, cerdito_x, cerdito_y, cerdito_ancho, cerdito_alto)   //Dibuja la imagen del explorador
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
    if(cerdito_y >=0){
        cerdito_y=cerdito_y-10;//cada que se presiona la tecla flecha de arriba. se disminuye10 
        uploadBackground();//aca se recarga la imagen de fondo 
        uploadCerdito();//aca se recarga la imagen del cerdito 
    }
}
function down(){
    if(cerdito_y <=500){
        cerdito_y=cerdito_y+10;//cada que se presiona la tecla flecha de arriba. se disminuye10 
        uploadBackground();//aca se recarga la imagen de fondo 
        uploadCerdito();//aca se recarga la imagen del cerdito  
    }
}
function right(){
	if(cerdito_x >=0){
        cerdito_x=cerdito_x+10;
        uploadBackground();
        uploadCerdito();
    }
}
function left(){
	if(cerdito_x <=500){
        cerdito_x=cerdito_x-10;
        uploadBackground();
        uploadCerdito();
    }
}



