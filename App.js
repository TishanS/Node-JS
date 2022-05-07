
//NODE JS create file
const http=require('http');
const fs=require('fs');

const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write(JSON.stringify({
            Current_date_time:`${new Date()}`
        }))
        var writeStream = fs.createWriteStream("date-time.txt");
        writeStream.write(`Current date and time:${new Date()}`);
        writeStream.end();
    }
    else if(request.url==='/get'){
        fs.readdir(__dirname,(err, files) => {
            console.log(files);
        });
        response.write(JSON.stringify({}));   
    }
    response.end();
})

server.listen(3002);