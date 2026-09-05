function dibujarMario(x,y){
  
  if(estadoMario == "caminar"){
 image(framesMario[frameActual],x,y,30,30);
 }
 if(estadoMario == "saltar"){
   image(saltoMario,x,y,30,30)
 }
 if(estadoMario == "fin"){
   image(framesMario[frameActual],x,y,30,30);
 };
};
