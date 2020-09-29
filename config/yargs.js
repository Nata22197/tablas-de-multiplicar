const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar', opciones)
    .command('crear','Crea el archivo de tabla de multiplicar en base al numero ingresado', opciones)
    .help()
    .argv;

module.exports = {
    argv
}