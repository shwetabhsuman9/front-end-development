
//Implementing downloader with the help of promises

function download(url){
return new Promise(function exec(resolve,reject){
    console.log("downloading data from url",url);
setTimeout(function down(){
        console.log("downloading completed");
        const content = "ABCDEF";
        resolve(content);
    },6000);
})
}

function writeFile(data){
return new Promise(function exec(resolve,reject){
    console.log("started writing in the file with data = ",data);
  setTimeout(function write(){
    console.log("writing completed");
    const fileName = 'file.txt';
            resolve(fileName);
        },5000);
    })

}

function uploadFile(url,file){
    
   return new Promise(function exec(resolve,reject){
    console.log("started uploading file",file," on",url);
    setTimeout(function upload(){
        console.log("file is uploaded");
        const res = "SUCCESS";
        resolve(res)
    },5000)
   }) 
}

download("xxx.com")
.then(function processDownload(value){
    console.log("Downloading done with the following value",value);
    return writeFile(value);
})
.then(function processWriting(fileName){
    console.log("data written on the file with the fileName",fileName);
    return uploadFile("www.upload.com",fileName)
})
.then(function processUpload(res){
    console.log("File is uploaded successfully with response",res);
})
