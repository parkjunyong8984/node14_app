const nodeserver = require('express')();

nodeserver.listen(8001, ()=>{
    console.log("서버정상구동중")
})