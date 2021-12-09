

class Table {

    constructor(arr) {

        this.header = arr[0]
        arr.shift();                //remover primeiro elemento de uma array
        this.rows = arr;
    }

    get RowCount() {                //get torna o método um atributo, *precisa retornar algo    
        return this.rows.length;    //length = contar
    }

    get ColumnCount() {
        return this.header.lenght; 
    }

}

module.exports = Table;