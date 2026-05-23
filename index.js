const chalk = require('chalk');
const fs = require('fs');
const readline = require('readline');

// Función básica para parsear argumentos de la terminal
function parseArgs() {
    const args = process.argv.slice(2);
    let config = { longitud: 8, simbolos: true, numeros: true, guardar: false };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--longitud' && args[i+1]) {
            config.longitud = parseInt(args[i+1]);
        } else if (args[i].startsWith('--simbolos=')) {
            config.simbolos = args[i].split('=')[1] === 'true';
        } else if (args[i].startsWith('--numeros=')) {
            config.numeros = args[i].split('=')[1] === 'true';
        } else if (args[i] === '--guardar') {
            config.guardar = true;
        }
    }
    if (config.longitud > 64) config.longitud = 64;
    return config;
}

function generarClave(config) {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numerosStr = '0123456789';
    const simbolosStr = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let caracteres = letras;
    if (config.numeros) caracteres += numerosStr;
    if (config.simbolos) caracteres += simbolosStr;

    let clave = '';
    for (let i = 0; i < config.longitud; i++) {
        clave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return clave;
}

const config = parseArgs();

// Interfaz para interactuar con la consola sin que se cierre
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ejecutar() {
    const clave = generarClave(config);
    
    console.log(chalk.greenBright(`\n> Tu nueva clave es: ${clave}`));

    if (config.guardar) {
        fs.appendFileSync('mis_claves.txt', clave + '\n');
        console.log(chalk.gray('>> Clave guardada exitosamente en mis_claves.txt'));
    }

    // Preguntamos si quiere generar otra y reiniciamos la función si la respuesta es 's'
    rl.question(chalk.yellow('\n¿Deseas generar otra clave con esta configuración? (s/n): '), (respuesta) => {
        if (respuesta.trim().toLowerCase() === 's') {
            ejecutar();
        } else {
            console.log(chalk.blue('¡Hasta luego!'));
            rl.close(); // Cierra el proceso de Node
        }
    });
}

// Iniciamos el ciclo
ejecutar();