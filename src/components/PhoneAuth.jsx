import React, { useState } from 'react';

const PhoneAuth = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('sendOTP'); // 'sendOTP' or 'verifyOTP'
  const [status, setStatus] = useState('');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: mobileNumber }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('OTP sent successfully!');
        setStep('verifyOTP');
      } else {
        setStatus(data.message || 'Failed to send OTP.');
      }
    } catch (error) {
      setStatus('Error sending OTP. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: mobileNumber, otp }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Login successful!');
      } else {
        setStatus(data.message || 'Invalid OTP.');
      }
    } catch (error) {
      setStatus('Error verifying OTP. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login with Mobile Number</h2>
      {step === 'sendOTP' ? (
        <form onSubmit={handleSendOTP}>
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
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP}>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            maxLength="6"
            placeholder="123456"
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {status && <p style={{ backgroundColor: 'royalblue', color: 'white', padding: '10px', borderRadius: '5px' }}>{status}</p>}
    </div>
  );
};

export default PhoneAuth;
