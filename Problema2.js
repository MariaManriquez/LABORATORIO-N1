//PROBLEMA2
function invertir(cadena) {
    var x = cadena.length;
    var cadenaayuda="";
    if(cadena.charAt(0)=="("&&cadena.charAt(cadena.length-1)=="()"){
    	for(var i=1;i<cadena.length-2;i++){
    		cadenaayuda=cadenaayuda+cadena.charAt(i);
    	}
    	var ap1=0;
    	for(var i=0;i<cadenaayuda.length;i++){
    		if(cadenaayuda.charAt(i)=="("){
    			ap1=1
    		}
    	}
    	if(ap1!=0){
    		cadenaayuda=letra(cadenaayuda);
    	}
    	
    	cadena=cadenaayuda;
    }
    
    var cadenaInvertida = "";
	
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }
  
function letra(cadena){
	var x = cadena.length;
	var con=0,ayuda=0;
	var cadena1="",cadenaInvertida = "";
	while (con<x) {
		if(ayuda==1&&con==(x-1)&&cadenaInvertida.charAt(x-1)!=")"){
			ayuda=0;
		}
		
		if(cadena.charAt(con) == '(' && ayuda == 0){
		ayuda=1;
		}else{
			if(cadena.charAt(con) == ')' && ayuda == 1){
			ayuda=0;
			cadenaInvertida=cadenaInvertida+invertir(cadena1);
			}else{
				if(cadena.charAt(con) != '(' && cadena.charAt(con) != ')' && ayuda == 0){
					cadenaInvertida=cadenaInvertida+cadena.charAt(con);
				}else{
					cadena1=cadena1 + cadena.charAt(con);
				}
			}
		}
		con++;
	}
	return cadenaInvertida;
}
console.log(letra("foo(bar)baz"));