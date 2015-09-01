// paquete creado
// este paquete extiende de juice (visit link http://github.com/...)
// este paquete remplaza css embebido de php por la ruta original
// ...
// 

var through = require('through2');
var juice   = require('juice').juiceResources;

module.exports = function(opt){

  function inlineStyle(file, encoding, callback){
    if (file.isNull()) {
      return callback(null, file);
    }
    var htmlBuffer = '';
        htmlBuffer+= file.contents.toString().replace(opt.esto, opt.poresto);
    juice(htmlBuffer, {webResources:{images:0}}, function(err, html){
      if(err) return callback(err);
        file.contents = new Buffer(html);
        callback(null, file);
    });
  }

  return through.obj(inlineStyle);

}