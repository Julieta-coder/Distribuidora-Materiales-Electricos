
            const imagenes = [
            '../Distribuidora-Materiales-Electricos/imagenes/ciocca_180px.png',
            '../Distribuidora-Materiales-Electricos/imagenes/Jeluz.webp',
            '../Distribuidora-Materiales-Electricos/imagenes/Sica.png',
            '../Distribuidora-Materiales-Electricos/imagenes/trefi_no_png-removebg-preview.png',
            '../Distribuidora-Materiales-Electricos/imagenes/candela.png',
            '../Distribuidora-Materiales-Electricos/imagenes/energizer png.png',
            '../Distribuidora-Materiales-Electricos/imagenes/interelec.png',
            '../Distribuidora-Materiales-Electricos/imagenes/Poxipol.png'
            ]

            let mostrar;
             
            function cantidadAMostrar(){
                   
                    if(window.innerWidth < 610){
                        mostrar = 2;
                        }else if(window.innerWidth > 610 && window.innerWidth < 900){
                        mostrar = 3;
                        }else if(window.innerWidth > 901 && window.innerWidth < 1200){
                        mostrar = 4;
                        }else{
                        mostrar= 5;
                        } 

                actualizarCarrusel(); 
            }
            

            window.addEventListener("resize", cantidadAMostrar);
                 
            let variable = 0;

            /*imagenes.lenght = 7*/
            function actualizarCarrusel(){
                    carrusel.innerHTML="";
                    /*RECORRO Y MUESTRO IMAGENES SEGUN CANTIDAD*/
                    for(let i=0; i < mostrar; i++){
                        let indice = variable + i; /*PRIMER 0, SEG 1*/

                        if(indice >= imagenes.length){
                            indice = indice - imagenes.length /*vuelvo a 0 si llega al final / 7 - 7 = 0*/
                        }

                        const crear = document.createElement("img");
                        crear.src=imagenes[indice];
                        document.getElementById("carrusel").appendChild(crear);  
                    }     

            }
           
            function retroceder(){
                variable++;

                if(variable >=imagenes.length){
                    variable = 0;
                }
                actualizarCarrusel();
            
            }

            function avanzar(){
                variable--;
                if(variable < 0){
                    variable = imagenes.length - 1;
                }
                actualizarCarrusel();

            }

        cantidadAMostrar();
    