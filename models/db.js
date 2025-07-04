const mongoose = require('mongoose');

mongoose.connect(MONGOOSE_URL);

charSchema = mongoose.Schema({
    text : String
})