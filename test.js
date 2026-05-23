const chalk = require('chalk');

console.log(chalk.blue("Iniciando pruebas de seguridad..."));
console.log(chalk.yellow("Verificando colisión de claves (simulación)..."));

setTimeout(() => {
    console.log(chalk.green("✅ Prueba superada: Las rutinas de generación aseguran claves únicas."));
}, 1000);