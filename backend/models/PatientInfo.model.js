const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const PatientInfo = new Schema({
    name : {type: String, required: true},
    uniqueId : {type: String, required : true, unique : true, default: () => generatePatientId()},
    dob : {type: Date, required: true},
    age: Number,
    bloodGroup: String,
    email: String,
    phone: {type: String, required: true},
    address :  {type: String, required: true},
    allergies: {type: [String], required: true},
    chronicDiseases: {type: [String], required: true},
    pastDiseases: {type: [String], required: true},
    ongoingMedications: [String],
    surgeries: [{
        name: String,
        date: Date,
        notes: String
    }],
    vaccinations: [{
        vaccineName: String,
        date: Date,
        notes: String
    }]
});

const generatePatientId = () => {
    const prefix = 'MD';
    const random = crypto.randomBytes(4).toString('hex');
    const timestamp = Date.now().toString().slice(-4);
    return `${prefix}` + `${random}` + `${timestamp}`;
}

module.exports = mongoose.model('Patient', PatientInfo);