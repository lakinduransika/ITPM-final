const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({

    person_name : {
        type : String,
        required: true
    },
    mistake_md : {
        type : String,
        required: true
    },
    person_nic : {
        type : String,
        required: true
    },
    phone_no : {
        type : String,
        required: true
    },
    p_duration: {
        type : String,
        required: true
    },
    st_prsn: {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    time: {
        type : String,
        required: true
    }

})

const Detail = mongoose.model("Detail",detailSchema);

module.exports = Detail;