alert("Güenas güenas");

var nombre = "el cochinote";
var edad = "sisas";

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1> Re aspero mi chino </h1>
    <h1> A yo me llaman ${nombre} </h1>
    <h1> y pues ${edad}</h1>
`;

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "uy gonorrea";
        // saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('paila')
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
})