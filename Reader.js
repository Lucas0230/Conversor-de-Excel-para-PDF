const fs = require('fs');

const util = require('util');



class Reader {

    constructor() {

        this.reader = util.promisify(fs.readFile);    // utilizar método do módulo util para transformar 
                                                       // a função 'fs.readFile' em sincrona, em uma promise.
    }

    async Read(filepath) {

        try {

            return await this.reader(filepath, 'utf-8')

        } catch (err) {

            return undefined

        }
    }


    /*Função Antiga (assíncrona) 
    
    Read(filepath) {

        fs.readFile(filepath, 'utf-8', (err, data) =>{

            if (err) {
                console.log('ERRO')
            } else {
                console.log(data)
            }
        })
    }
    */

}

module.exports = Reader;