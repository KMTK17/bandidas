class Persona {
  nombre;
  apellido;
  edad;
  bandidas;

  constructor(nombre, apellido, edad, bandidas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.bandidas = bandidas;
  }

  eliminarBandida(nombreBandida) {
    const bandidasSerias = this.bandidas.filter((bandida) => {
      return bandida != nombreBandida;
    });
    this.bandidas = bandidasSerias;
  }

  agregarBandida(nombreBandida){
    this.bandidas.push(nombreBandida);
  }

  tengoNovia(){
    this.bandidas = []
  }
 
}

/* const denilson = new Persona('Denilson','Gonzalez',21,['Andrea','Daniela']);

const andres = new Persona('Andres','Martinez',30,['Sofia','Marta']);
const luis = new Persona('Luis','Perez',21,['Laura','Paola']);
const juan = new Persona('Juan','Alvarez',21,['Valentina','Tatiana']);
personas.push(denilson,luis,andres,juan);

console.log(personas);

luis.eliminarBandida('Laura');
denilson.eliminarBandida('Andrea');

console.log(personas); */

let save = document.getElementById("send");
let save_bandit = document.getElementById("send_bandit");
let del_bandit = document.getElementById("del_bandit");
let all_del = document.getElementById('all_del');

let array = [];
let  band = []

save.addEventListener("click", () => {
  let namae = document.getElementById("name").value;
  let last_name = document.getElementById("last_name").value;
  let age = document.getElementById("age").value;

  const persona = new Persona(namae, last_name, age, band);

  array.push(persona);
  console.log(array);

  document.getElementById('name').value = "";
  document.getElementById('last_name').value = "";
  document.getElementById('age').value = "";

});

save_bandit.addEventListener('click', ()=>{

    let bandit = document.getElementById("bandit").value;
    let namae = document.getElementById("name").value;
    let person;

    for(let i=0;i<array.length;i++){
        if(array[i].nombre == namae){
            console.log(array[i]);
            person = array[i];
            person.agregarBandida(bandit);
        } 
        

        document.getElementById('bandit').value = "";   
    }

    console.log(array);
    
})

del_bandit.addEventListener('click', ()=>{
    let bandit = document.getElementById("bandit").value;
    let namae = document.getElementById("name").value;
    let person;

    for(let i=0;i<array.length;i++){
        if(array[i].nombre == namae){
            person = array[i];
            person.eliminarBandida(bandit);
        }

        document.getElementById('bandit').value = "";   
    }

    console.log(array);
    
})

all_del.addEventListener('click', ()=>{
    let namae = document.getElementById("name").value;
    let person;

    for(let i=0;i<array.length;i++){
        if(array[i].nombre == namae){
            person = array[i];
            person.tengoNovia();
        }

    }
    console.log(array);

})



