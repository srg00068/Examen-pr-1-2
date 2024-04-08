function listar(){
    var conecta= new XMLHttpRequest();
    conecta.open('GET',' http://labtelema.ujaen.es:8083/inventory');
    conecta.onreadystatechange = function () {
        if(conecta.readyState==4){
            if(conecta.status==200){
                const datos = JSON.parse(conecta.responseText);

                lista_entradas.innerHTML = ''

                datos.forEach(function(elemento_entrada) {
                    var entrada = document.createElement('li');
                    entrada.innerHTML = elemento_entrada._id + ' - ' + elemento_entrada.quantity + ' - ' + elemento_entrada.description + ' - ' + elemento_entrada.location + ' - ' + elemento_entrada.ref;
                    lista_entradas.appendChild(entrada);
                });

                alert('Datos mostrados correctamente');
            }else if(conecta.status==500){
                alert("Error del servidor");
            }else{
                alert("error");
            }
        }
    }
    conecta.send();
            
            
}

function ocultar(event){
    lista_entradas.innerHTML = ''
    alert("Ocultando...")
}

function filtrar(event){
    event.preventDefault();
    var conecta= new XMLHttpRequest();
    conecta.open('GET',' http://labtelema.ujaen.es:8083/inventory');
    conecta.onreadystatechange = function () {
        if(conecta.readyState==4){
            if(conecta.status==200){
                const datos = JSON.parse(conecta.responseText);
                var descripcion= document.getElementById("Campo_texto").value
                lista_entradas.innerHTML = ''

                datos.forEach(function(elemento_entrada) {
                    
                    if(elemento_entrada.description.substring(0, 4)==descripcion){
                    var entrada = document.createElement('li');
                    entrada.innerHTML = elemento_entrada._id + ' - ' + elemento_entrada.quantity + ' - ' + elemento_entrada.description + ' - ' + elemento_entrada.location + ' - ' + elemento_entrada.ref;
                    lista_entradas.appendChild(entrada);
                    

                    } else if(elemento_entrada.description==descripcion){
                        var entrada = document.createElement('li');
                        entrada.innerHTML = elemento_entrada._id + ' - ' + elemento_entrada.quantity + ' - ' + elemento_entrada.description + ' - ' + elemento_entrada.location + ' - ' + elemento_entrada.ref;
                        lista_entradas.appendChild(entrada);
                        
                    } else if(elemento_entrada.description.substring(0, 7)==descripcion){
                        var entrada = document.createElement('li');
                        entrada.innerHTML = elemento_entrada._id + ' - ' + elemento_entrada.quantity + ' - ' + elemento_entrada.description + ' - ' + elemento_entrada.location + ' - ' + elemento_entrada.ref;
                        lista_entradas.appendChild(entrada);
                        
                    }
                });
                alert("Datos mostrados correctamente");
                
            }else if(conecta.status==500){
                alert("Error del servidor");
            }else{
                alert("error");
            }
        }
    }
    conecta.send();
            
            
}

