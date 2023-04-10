function guardar(){
    let numero = document.getElementsByName('tuNumero')[0].value;
    let porcentaje = numero * 0.3;
	console.log("El 30% de "+numero+" es " + porcentaje);
	document.write("El 30% de "+numero+" es " + porcentaje);
}