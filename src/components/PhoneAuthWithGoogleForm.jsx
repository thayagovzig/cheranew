import React, { useState } from 'react';

const PhoneAuthWithGoogleForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Google Form POST URL derived from your provided form link
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc86GZBxC_N_sJdbx1OIIdaydoXLQ2VRqGRAzUMoW4KKmxjGg/formResponse';

    // TODO: Replace 'entry.123456789' with your actual entry ID for the mobile number field
    const formData = new FormData();
    formData.append('entry.123456789', mobileNumber);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setStatus('Mobile number submitted successfully!');
        setMobileNumber('');
      })
      .catch((error) => {
        setStatus('Error submitting mobile number.');
        console.error('Error submitting to Google Form:', error);
      });
  };

  return (
    <div>
      <h2>Login with Mobile Number</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
          pattern="\\+?\\d{10,15}"
          placeholder="+1234567890"
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p style={{ backgroundColor: 'royalblue', color: 'white', padding: '10px', borderRadius: '5px' }}>{status}</p>}
    </div>
  );
};

export default PhoneAuthWithGoogleForm;
