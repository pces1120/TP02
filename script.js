var esSemana = false;
var diaActual = prompt('Qué día es hoy?');
var diasDeSemana = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

for(pos = 0; pos < diasDeSemana.length; pos++){
	if(diaActual === diasDeSemana[5] || diaActual === diasDeSemana[6]){
		alert('Es fin de semana');
		break;
	}
	else if(diaActual === diasDeSemana[0] || diaActual === diasDeSemana[1] || diaActual === diasDeSemana[2] || diaActual === diasDeSemana[3] || diaActual === diasDeSemana[4]){
		alert('Es dia habil');
		break;
	}
	else{
		alert('No existe');
		break
	}
}


