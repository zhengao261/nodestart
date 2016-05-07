//file System 类 用于文件系统
/*
*   文件属性读写。
*
        其中常用的有fs.stat、fs.chmod、fs.chown等等。

    文件内容读写。

        其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。

    底层文件操作。

        其中常用的有fs.open、fs.read、fs.write、fs.close等等。
*
*
*
* */
var fs = require('fs');
var pathname = "src/total.txt";
fs.readFile(pathname,function(error,data){
    if (error) {
        throw error;
    }else {
        console.log(data.toString()); // 读取到内容
    }
});
//sync
try {
    var data = fs.readFileSync(pathname);
    console.log(data.toString());
}catch (err){
    console.log(err);
}
