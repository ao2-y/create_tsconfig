var fs = require('fs');

var filePaths = [".", "hoge"];

var fileName = "tsconfig.json";
var data =
{
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true,
    "removeComments": true,
    "sourceRoot": "/",
    "module": "commonjs"
  },
  "filesGlob": [
    "./**/*.ts",
    "!./node_modules/**/*.ts"
  ],
  "files": [
  ],
  "atom": {
    "rewriteTsconfig": true
  }
};

for (var path of filePaths) {
  (function(p){ 
    fs.writeFile(p + '/' + fileName, JSON.stringify(data, null, '    '), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("CREATE PATH : " + p + '/' + fileName);
      }
    })
  })(path);
}
