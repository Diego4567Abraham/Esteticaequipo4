    function validar {
        if(document.formulario.nom_usu.value==""
                || document.formulario.appat_usu==""
                || document.formulario.apmat_usu==""
                || document.formulario.tel_usu=""){
            alert("falta llenar un campo");
            return false;
                }else{
                  return submit;  
                }
    
 }

    function validarN(e){//numeros
        var tecla = document.all ? tecla = e.keyCode : tecla = e.wich;
        return ((tecla > 47 && tecla < 58) || tecla == 8);
 }

    function validarL(e){//letras
        var tecla = document.all ? tecla = e.keyCode : tecla = e.wich;
        var especiales = [0,32,13];
    
    for(var i in especiales){
        if(tecla == especiales[i]){
            return true;
         }
         return (((tecla >96 && tecla <123) || (tecla >64 && tecla <91)) || tecla==8);
     }
    
 }