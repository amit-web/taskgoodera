const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
          type: String,
          required: false,
        },
        type: {
            type: String,
            required: true,
        },
        publication_date: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            required: true,
        },
        tags:{
            type:Array,
            required:false,
        },
        company:{
            type:Object,
            required:false
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Job = mongoose.model("job", jobSchema);

module.exports = Job;