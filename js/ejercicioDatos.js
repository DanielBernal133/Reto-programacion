const salida = document.getElementById('salida');
const botonConsultNom = document.getElementById('botonDatnombre');
const botonConsultApelli = document.getElementById('botonDatApellido');


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

botonConsultNom.addEventListener('click', ()=>{
    let inputDat = document.getElementById('inputDat').value;
    let results= arraydat.filter(arrayda => arrayda.Nombre == inputDat);
    salida.innerText =' El nombre consultado es: ' +JSON.stringify(results);
});

botonConsultApelli.addEventListener('click', ()=>{
    let inputDat = document.getElementById('inputDat').value;
    let results= arraydat.filter(arrayda => arrayda.Apellido == inputDat);
    salida.innerText =' El Apellido consultado es: ' +JSON.stringify(results);
});

