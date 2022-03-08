//Variables de entrada de DOM o del archivo HTML 
const salida = document.getElementById('salida');
const botonConsultNom = document.getElementById('botonDatnombre');
const botonConsultApelli = document.getElementById('botonDatApellido');

//Variable Arraylist donde se obtienen los datos a consultar
let arraydat = [
    {
        Nombre: 'Jhon',
        Apellido: 'Bernal'
    },
    {
        Nombre: 'Juan',
        Apellido: 'Ariza'
    },
    {
        Nombre: 'Jhon',
        Apellido: 'Guitierrez'
    },
    {
        Nombre: 'Jose',
        Apellido: 'Lopez'
    },
    {
        Nombre: 'Jose',
        Apellido: 'Guillermo'
    },
    {
        Nombre: 'Juan',
        Apellido: 'Garcia'
    },
    {
        Nombre: 'Sara',
        Apellido: 'Lopez'
    },
    {
        Nombre: 'Daniel',
        Apellido: 'Bernal'
    },


];

//Accion de cuando da click en el boton consultar nombre
botonConsultNom.addEventListener('click', ()=>{
    //Variable de donde saca el dato a cconsultar
    let inputDat = document.getElementById('inputDat').value;
    //Variable donde hace el fltro con los datos que llega del input
    let results= arraydat.filter(arrayda => arrayda.Nombre == inputDat);
    if(results.length === 0){
        salida.innerText ='No hay nungún nombre con ese dato';
    }else{
        salida.innerText =' El nombre consultado es: ' +JSON.stringify(results);
    }
    
});

//Accion de clic en el boton de consultar Apellido. 
botonConsultApelli.addEventListener('click', ()=>{
    let inputDat = document.getElementById('inputDat').value;
    let results= arraydat.filter(arrayda => arrayda.Apellido == inputDat);
    if(results.length === 0){
        salida.innerText ='No hay nungún apellido con ese dato';
    }else{
        salida.innerText =' El Apellido consultado es: ' +JSON.stringify(results);
    }
});



