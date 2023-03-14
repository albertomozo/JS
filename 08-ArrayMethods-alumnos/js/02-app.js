titulo.innerHTML = '02 -Iteradores Foreach ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>VAmos a recorrer a los alumnos mediante un foreach</p>';



alumnos.forEach((valor,indice,alumnos1)=>{
    // valor es el contenido de cafa elemnto del array 
    // el inidice es la psosicon denro del array 
    // alumnos1 : todo el array que tenemos disponible  en cada iteracion
    console.log(`alumno indice = ${indice} valor.Nombre.Nombre ${valor.Nombre}`  ); 
    console.log(valor);
    console.log(alumnos1); // accedemos a too el array 
    console.log('---------------');
})






