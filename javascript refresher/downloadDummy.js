function download(url, exec){
    console.log("downloading data from url",url);
    setTimeout(function down(){
        console.log("downloading completed");
        const content = "ABCDEF";
        exec(content)
    },5000);

}

function writeFile(data,cb){
console.log("started writing in the file with data = ",data);
setTimeout(function write(){
    console.log("writing completed");
    const fileName = 'file.txt';
    cb(fileName)
},3000);
}

function uploadFile(url,file,cb){
    console.log("started uploading file",file," on",url);
    setTimeout(function upload(){
        console.log("file is uploaded");
        const res = "SUCCESS";
        cb(res);
    },5000)
}

download("xxx.com",function exec(val){
console.log("we r going to process the download data");
writeFile(val,function exec(fileName){
    console.log("we have downloaded and written in the file, now we will upload");
uploadFile("upload.com",fileName,function exec(response){
    console.log('we have uploaded with response',response);
})
})
})

// writeFile("ABCDEF",function exec(name){
//     console.log("fileName is",name);
// }
// )

