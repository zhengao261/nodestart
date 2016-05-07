//path路径模块用于处理和转换文件路径
//标准化之后的路径里的斜杠在Windows系统下是\，
// 而在Linux系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，
// 需要用.replace(/\\/g, '/')再替换一下标准路径。
var path = require('path');
var test = path.normalize('/foo/bar//baz/asdf/quux/..')
console.log(test);