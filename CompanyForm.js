import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../src/companyslice';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', periodicity: '2 weeks',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCompany({ id: Date.now(), ...formData }));
    setFormData({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', periodicity: '2 weeks' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Company Name" className="input" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="input" />
      <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} placeholder="LinkedIn Profile" className="input" />
      <input type="text" name="emails" value={formData.emails} onChange={handleChange} placeholder="Emails (comma-separated)" className="input" />
      <input type="text" name="phoneNumbers" value={formData.phoneNumbers} onChange={handleChange} placeholder="Phone Numbers (comma-separated)" className="input" />
      <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" className="textarea"></textarea>
      <select name="periodicity" value={formData.periodicity} onChange={handleChange} className="select">
        <option value="1 week">1 week</option>
        <option value="2 weeks">2 weeks</option>
        <option value="1 month">1 month</option>
      </select>
      <button type="submit" className="btn-primary">Add Company</button>
    </form>
  );
};

export default CompanyForm;