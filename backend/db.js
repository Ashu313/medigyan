const mongoose = require("mongoose");

const url ="mongodb+srv://kashutosh727:6zJhzOahSpBPXrxT@cluster0.u3ygfi3.mongodb.net/";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
