//Buffer数据块API
//稳定类:不用require直接用
/*
* Buffer类都能做什么?  --> 用来直接处理二进制数据
* API方法:
*   new Buffer(size)
*       分配一个大小是size的8位字节
*   new Buffer(Array)
*       分配一个新的 buffer 使用一个8位字节 array 数组.
*   new Buffer(str, [encoding])
*       str String类型 - 需要存入buffer的string字符串.
*       encoding String类型 - 使用什么编码方式，参数可选.
*   Buffer.isEncoding(encoding)
*       用来检测给定的编码字符串
*
*
* */
var nBuf = new Buffer(4);
console.log(nBuf); // 新的buffer
var nBufArr = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log("数组:" + nBufArr);
var nBufStr = new Buffer('hello', 'utf-8');
console.log(nBufStr); // 字符串转8位buffer
var nBufis = Buffer();
console.log(Buffer.isEncoding(nBufArr));


//var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
//var dup = new Buffer(bin.length);
////console.log(dup);
//bin.copy(dup);  // 复制bin中buffer给dup
//dup[0] = 0x48;
//console.log(bin); // => <Buffer 68 65 6c 6c 6f>
//console.log(dup); // => <Buffer 48 65 65 6c 6f>