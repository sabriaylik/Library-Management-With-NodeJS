const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/LibraryManagement",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("Successfully connect to MongoDB"))
    .catch(err => {console.error("Connection error",err)})
    







