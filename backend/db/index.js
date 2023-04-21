const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>{
        console.log("😍 Db Connected Successfully.");
    })
    .catch((err) => {
        console.log("😓 Db failed to Connect", err);
    })