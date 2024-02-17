const generaNumero = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const adivinaNumero = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado === numeroSecreto){
        console.log("Felicitaciones, adivinaste el numero");
    }else if (numeroAdivinado > numeroSecreto){
        console.log("El numero secreto es menor");
    }else{
        console.log("El numero secreto es mayor");
    }
};

module.exports = {
    generaNumero,
    adivinaNumero
};