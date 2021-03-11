const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/trippy_basics",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {console.log("Database Connected")}
);

