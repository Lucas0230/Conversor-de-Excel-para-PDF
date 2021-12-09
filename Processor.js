

class Processor {

    static Process(data) {     // static para acessar direto pela classe = Processor.Process(xxx)

        var a = data.split('\r\n')        //split para separar
        var rows = [];

        a.forEach(row => {

            var arr = row.split(',')
            rows.push(arr)                  //colocar array na var rows;
        });

        return(rows);

    }


}

module.exports = Processor;