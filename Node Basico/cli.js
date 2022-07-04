const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow('Lista de links'), resultado);
}

processaTexto(caminho);