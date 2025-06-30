// const mongoose = require('mongoose');
// const Patient = require('../models/PatientInfo.model.js'); 

// //Create new Patient
// exports.createPatient = async (req, res, next) => {
//     try{
//         const {
//             name, birthdate, age, bloodGroup, 
//             email, phone, address,
//             allergies, chronicDiseases, pastDiseases,
//             ongoingMedications, surgeries='[]',
//             vaccinations='[]'
//         } = req.body;

//         const parsedSurgeries = typeof surgeries === 'string' ? JSON.parse(surgeries) : surgeries;
//         const parsedVaccinations = typeof vaccinations === 'string' ? JSON.parse(vaccinations) : vaccinations;

//         // Validate before using
//         if (isNaN(Date.parse(birthdate))) {
//             return res.status(400).json({ error: "Invalid birthdate format. Use YYYY-MM-DD." });
//         }

//         const patient = new Patient({
//             name,
//             dob: new Date(birthdate),
//             age,
//             bloodGroup,
//             email,
//             phone,
//             address,
//             allergies,
//             chronicDiseases,
//             pastDiseases,
//             ongoingMedications,
//             surgeries: parsedSurgeries,
//             vaccinations: parsedVaccinations
//         })
//         await patient.save();
//         res.status(201).json({
//             success: true,
//             patient
//         });
//     }
//     catch(err){
//         console.error('Error in createPatient:', err);
//         res.status(500).json({ success: false, message: err.message });
//         //next(err)
//     }
// }


const mongoose = require('mongoose');
const Patient = require('../models/PatientInfo.model.js'); 

// Create new Patient
exports.createPatient = async (req, res, next) => {
    try {
        const {
            name, dob, age, bloodGroup, 
            email, phone, address,
            allergies, chronicDiseases, pastDiseases,
            ongoingMedications, surgeries='[]',
            vaccinations='[]'
        } = req.body;

        const parsedSurgeries = (typeof surgeries === 'string' ? JSON.parse(surgeries) : surgeries).map(s => ({
            ...s,
            date: s.date ? new Date(s.date) : null
        }));
        const parsedVaccinations = (typeof vaccinations === 'string' ? JSON.parse(vaccinations) : vaccinations).map(v => ({
            ...v,
            date: v.date ? new Date(v.date) : null
        }));

        // Validate before using
        if (isNaN(Date.parse(dob))) {
            return res.status(400).json({ error: "Invalid dob format. Use YYYY-MM-DD." });
        }

        const calculateAge = (dob) => {
            const diff = Date.now() - new Date(dob).getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        };

        const patient = new Patient({
            name,
            dob: new Date(dob),
            age: calculateAge(dob),
            bloodGroup,
            email,
            phone,
            address,
            allergies,
            chronicDiseases,
            pastDiseases,
            ongoingMedications,
            surgeries: parsedSurgeries,
            vaccinations: parsedVaccinations
        });
        await patient.save();
        res.status(201).json({
            success: true,
            patient
        });
    } catch (err) {
        console.error('Error in createPatient:', err);
        res.status(500).json({ success: false, message: err.message });
    }
}