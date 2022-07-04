const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('Deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:/Users/Felipe Lindo/felipe-node/Node Basico/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
});
