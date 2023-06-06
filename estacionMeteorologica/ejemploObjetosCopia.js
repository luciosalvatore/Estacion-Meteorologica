// no se puede copiar un objeto directamente
const auto = {auto:'ford'}
const otroAuto = auto
otroAuto.auto = 'ferrari' // ambos objetos quedan con los mismo valores

console.log('original', auto);
console.log('copia', otroAuto);

// se debe clonar el objeto original
const otroOtroAuto = {...auto} // forma de clonar

