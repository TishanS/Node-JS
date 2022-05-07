
const http=require('http');
const fs=require('fs');

//extract time from timestamp
const timestamp=new Date();
console.log(timestamp);
const getTimeFromDate = timestamp => {
    const date = new Date(timestamp );
    let hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
    return (hours) + ":" + (minutes) + ":" + (seconds)
  }
  
 //create text file and write
 var writeStream = fs.createWriteStream("date-time.txt");
 writeStream.write(`Current date and time:${new Date()}`);
 writeStream.end();

 //get files in particular directory
 fs.readdir('./', (err, files) => {
    console.log(files);
});
 
//API endpoint 
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write(JSON.stringify({
            Current_date_time:`${new Date()}`,
            time:`${getTimeFromDate(timestamp)}`
        }))
    }
    response.end();
})

server.listen(3002);
