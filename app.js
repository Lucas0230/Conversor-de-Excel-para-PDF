
var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');
var Writer = require('./Writer');
var PDFWriter = require('./PDFwriter');

var leitor = new Reader();
var escritor = new Writer();

async function main(){

    var dados = await leitor.Read('./users.csv');

    var dadosProcessados = Processor.Process(dados);

    console.log(dadosProcessados)
    console.log('-----------------------------')

    var users = new Table(dadosProcessados);      // divisão do header e conteudo

    var html = await HtmlParser.Parse(users);    

    escritor.Write(Date.now() +'.html',html)

    PDFWriter.WritePDF(Date.now()+ '.PDF',html)

}

main();
