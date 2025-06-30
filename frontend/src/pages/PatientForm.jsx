import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    age: '',
    bloodGroup: '',
    email: '',
    phone: '',
    address: '',
    allergies: '',
    chronicDiseases: '',
    pastDiseases: '',
    ongoingMedications: '',
    surgeries: [{ name: '', date: '', notes: '' }],
    vaccinations: [{ vaccineName: '', date: '', notes: '' }]
  });

   const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSurgeryChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...formData.surgeries];
    updated[index][name] = value;
    setFormData({ ...formData, surgeries: updated });
  };

  const handleVaccinationChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...formData.vaccinations];
    updated[index][name] = value;
    setFormData({ ...formData, vaccinations: updated });
  };

  const addSurgery = () => {
    setFormData({ ...formData, surgeries: [...formData.surgeries, { name: '', date: '', notes: '' }] });
  };

  const addVaccination = () => {
    setFormData({ ...formData, vaccinations: [...formData.vaccinations, { vaccineName: '', date: '', notes: '' }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const finalData = {
      ...formData,
      allergies: formData.allergies ? formData.allergies.split(',').map((s) => s.trim()).filter(Boolean) : [],
      chronicDiseases: formData.chronicDiseases ? formData.chronicDiseases.split(',').map((s) => s.trim()).filter(Boolean) : [],
      pastDiseases: formData.pastDiseases ? formData.pastDiseases.split(',').map((s) => s.trim()).filter(Boolean) : [],
      ongoingMedications: formData.ongoingMedications ? formData.ongoingMedications.split(',').map((s) => s.trim()).filter(Boolean) : [],
      surgeries: formData.surgeries.filter(s => s.name || s.date || s.notes),
      vaccinations: formData.vaccinations.filter(v => v.vaccineName || v.date || v.notes)
    };

    try {
      const res = await axios.post('http://localhost:5000/api/patient/create', finalData);
      if (res.data) {
        setSuccess('Patient data saved successfully!');
        setFormData({
          name: '', dob: '', age: '', bloodGroup: '', email: '', phone: '', address: '',
          allergies: '', chronicDiseases: '', pastDiseases: '', ongoingMedications: '',
          surgeries: [{ name: '', date: '', notes: '' }],
          vaccinations: [{ vaccineName: '', date: '', notes: '' }]
        });
        navigate('/healthcard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save data. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Patient Personal Information</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[{ label: 'Full Name', name: 'name', type: 'text' },
          { label: 'Date of Birth', name: 'dob', type: 'date' },
          { label: 'Age', name: 'age', type: 'number' },
          { label: 'Blood Group', name: 'bloodGroup', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Phone Number', name: 'phone', type: 'text' },
          { label: 'Address', name: 'address', type: 'text' },
          { label: 'Allergies (comma separated)', name: 'allergies', type: 'text' },
          { label: 'Chronic Diseases (comma separated)', name: 'chronicDiseases', type: 'text' },
          { label: 'Past Diseases (comma separated)', name: 'pastDiseases', type: 'text' },
          { label: 'Ongoing Medications (comma separated)', name: 'ongoingMedications', type: 'text' },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              id={name}
              value={formData[name] || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        ))}

        {/* Surgeries Section */}
        <div className="col-span-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Surgeries</h3>
            <button type="button" onClick={addSurgery} className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Add Surgery</button>
          </div>
          {formData.surgeries.map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input name="name" type="text" placeholder="Surgery Name" value={s.name} onChange={(e) => handleSurgeryChange(i, e)} className="border p-2 rounded" />
              <input name="date" type="date" placeholder="Date" value={s.date} onChange={(e) => handleSurgeryChange(i, e)} className="border p-2 rounded" />
              <input name="notes" type="text" placeholder="Notes" value={s.notes} onChange={(e) => handleSurgeryChange(i, e)} className="border p-2 rounded" />
            </div>
          ))}
        </div>

        {/* Vaccinations Section */}
        <div className="col-span-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Vaccinations</h3>
            <button type="button" onClick={addVaccination} className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Add Vaccination</button>
          </div>
          {formData.vaccinations.map((v, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input name="vaccineName" type="text" placeholder="Vaccine Name" value={v.vaccineName} onChange={(e) => handleVaccinationChange(i, e)} className="border p-2 rounded" />
              <input name="date" type="date" placeholder="Date" value={v.date} onChange={(e) => handleVaccinationChange(i, e)} className="border p-2 rounded" />
              <input name="notes" type="text" placeholder="Notes" value={v.notes} onChange={(e) => handleVaccinationChange(i, e)} className="border p-2 rounded" />
            </div>
          ))}
        </div>

        <div className="col-span-full flex justify-center">
          <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Save Patient Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;